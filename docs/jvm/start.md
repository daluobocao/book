# 入门
java -XX:+PrintFlagsFinal  打印参数

Java 字节码指令的操作码（opcode）被固定为一个字节 

在 HotSpot 里面：第一种是解释执行，即逐条将字节码翻译成机器码并
执行；第二种是即时编译（Just-In-Time compilation，JIT），即将一个方法中包含的所有字节码编
译成机器码后再执行 

加载

链接 

​		验证

​		准备 为静态字段分配内存 

		解析 符号引用解析成为实际引用  符号引用指向一个未被加载的类，或者未被加载类的字段或方法，那么解析将触发这个类的加载（但未必触发这个类的链接以及初始
	化。） 
初始化 

		如果直接赋值的静态字段被 fnal 所修饰，并且它的类型是基本类型或字符串时，那么该字段便会
​	被 Java 编译器标记成常量值（ConstantValue ），其初始化直接由 Java 虚拟机完成。除此之外的
​	直接赋值操作，以及所有静态代码块中的代码，则会被 Java 编译器置于同一方法中，并把它命名为
​	<clinit> 

​	类加载的最后一步是初始化，便是为标记为常量值的字段赋值，以及执行 < clinit > 方法的过
​	程。Java 虚拟机会通过加锁来确保类的 < clinit > 方法仅被执行一次。 

启动类加载器 JRE 的 lib 目录下 jar 包中的类（以及由虚拟机参数 -Xbootclasspath 指定的类） 

扩展类加载器 extension class loader  lib/ext 目录下 jar 包中的类（以及由系统变量 java.ext.dirs 指定的类） 

应用类加载器（application classloader）  -cp/-classpath、系统变量 java.class.path 或环境变量 CLASSPATH 所
指定的路径 