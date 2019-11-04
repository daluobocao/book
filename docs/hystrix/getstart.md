# 入门

## 1.1 入门使用

**maven配置**

```
<dependency>
    <groupId>com.netflix.hystrix</groupId>
    <artifactId>hystrix-core</artifactId>
    <version>1.5.13</version>
</dependency>
```

**hello world**

```
public class CommandHelloWorld extends HystrixCommand<String> {
    private final String name;
    public CommandHelloWorld(String name) {
        super(HystrixCommandGroupKey.Factory.asKey("ExampleGroup"));
        this.name = name;
    }
    @Override
    protected String run() {
        return "Hello " + name + "!";
    }
}
```

引用

```
String s = new CommandHelloWorld("Bob").execute();
Future<String> s = new CommandHelloWorld("Bob").queue();
Observable<String> s = new CommandHelloWorld("Bob").observe();
```

## 1.2 常见用法

### 1.2.1 fallback

覆盖 **HystrixCommand.getFallback** 方法即可