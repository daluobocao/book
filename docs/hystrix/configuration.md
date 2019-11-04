# 2 参数配置

## 简介

我们可以在 ```HystrixCommand```构造函数中传入配置信息 示例如下

```java
HystrixCommand.Setter config = 
    HystrixCommand.Setter.withGroupKey(HystrixCommandGroupKey.Factory.asKey("ExampleGroup"))  .andCommandPropertiesDefaults(
    HystrixCommandProperties.Setter().withExecutionTimeoutInMilliseconds(3000))            .andThreadPoolPropertiesDefaults(HystrixThreadPoolProperties.Setter().withCoreSize(10));
HystrixCommand<String> hystrixCommand = new HystrixCommand<String>(config){}
```



## 配置项详解

### command properties

| 属性名                                              |                        | 默认值 |
| --------------------------------------------------- | ---------------------- | ------ |
| execution.isolation.strategy                        | 隔离策略               | thread |
| execution.isolation.thread.timeoutInMilliseconds    | 方法执行超时时间       | 1000   |
| execution.timeout.enabled                           | 是否给方法执行设置超时 | true   |
| execution.isolation.thread.interruptOnTimeout       | 方法超时时候中断       | false  |
| execution.isolation.thread.interruptOnCancel        | 方法取消时候中断       | false  |
| execution.isolation.semaphore.maxConcurrentRequests | 信号量最大并发数       | 10     |

### 熔断器（circuitBreaker）

| 属性名                                   |                                                    | 默认值 |
| ---------------------------------------- | -------------------------------------------------- | ------ |
| circuitBreaker.enabled                   | 是否启用熔断器                                     | true   |
| circuitBreaker.requestVolumeThreshold    | 启用熔断器功能窗口时间内的最小请求数               | 20     |
| circuitBreaker.errorThresholdPercentage  | 错误率多少时候打开熔断器                           | 50     |
| circuitBreaker.sleepWindowInMilliseconds | 熔断器打开保持时间，该时间内的请求都会直接进行降级 | 5000   |
| circuitBreaker.forceOpen                 | 强制打开                                           |        |
| circuitBreaker.forceClosed               | 强制关闭                                           |        |

### Fallback

| 属性名                                             |                                                | 默认值 |
| -------------------------------------------------- | ---------------------------------------------- | ------ |
| fallback.enabled                                   | 是否开启方法降级                               | true   |
| fallback.isolation.semaphore.maxConcurrentRequests | 方法降级最大并发，如果超过并发那么直接抛出异常 | 10     |

### Metrics

| 属性名                                        |                                                              | 默认值 |
| --------------------------------------------- | ------------------------------------------------------------ | ------ |
| metrics.rollingStats.timeInMilliseconds       | 窗口时间，hystix采用滑动窗口的方式进行统计，此属性和熔断相关 | 1000   |
| metrics.healthSnapshot.intervalInMilliseconds | 指定了健康数据统计器（影响 Hystrix 熔断）中每个桶的大小      | 500    |
| metrics.rollingStats.numBuckets               | This property sets the number of buckets the rolling statistical window is divided into | 10     |
| metrics.rollingPercentile.enabled             | 是否统计方法响应时间百分比                                   | true   |
| metrics.rollingPercentile.timeInMilliseconds  | 统计响应时间百分比时的窗口大小                               | 60000  |
| metrics.rollingPercentile.numBuckets          | 统计响应时间百分比时滑动窗口要划分的桶用                     | 6      |
| metrics.rollingPercentile.bucketSize          | 统计响应时间百分比时，每个滑动窗口的桶内要保留的请求数       | 100    |

## ThreadPool 

| 属性名                                |                                    | 默认值 |
| ------------------------------------- | ---------------------------------- | ------ |
| coreSize                              | 核心线程数                         | 10     |
| allowMaximumSizeToDivergeFromCoreSize | 是否允许线程池扩展到最大线程池数量 | false  |
| maximumSize                           | 线程池中线程的最大数量             | 10     |
| maxQueueSize                          | 队列的最大值                       | -1     |
| queueSizeRejectionThreshold           | 队列长度达到设定值执行拒绝策略     | 5      |
| keepAliveTimeMinutes                  | 空闲回收时间                       | 2 min  |

