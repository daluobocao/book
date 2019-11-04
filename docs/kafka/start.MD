# kafka入门

## 下载

## 启动

首先配置下zookeeper 配置文件目录`config/server.properties` 如果不使用外部的可以使用kafka内置的zookeeper `config/zookeeper.properties`

启动 ： `bin/kafka-server-start.sh config/server.properties` 

## 创建topic

`bin/kafka-topics.sh --create --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1 --topic test`

查看 topic 

bin/kafka-topics.sh --list --bootstrap-server localhost:9092

## 发送消息(控制台)

`bin/kafka-console-producer.sh --broker-list localhost:9092 --topic test`

## 启动消费者(控制台)

`bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic test` `--from-beginning`



## 集群

cp config/server.properties config/server-1.properties

cp config/server.properties config/server-2.properties

修改如下配置

```
 broker.id=1 #集群下必须唯一
 listeners=PLAINTEXT://:9093 #端口
 log.dirs=/tmp/kafka-logs-1 #数据目录
```

启动集群

bin/kafka-server-start.sh config/server.properties &

bin/kafka-server-start.sh config/server-1.properties &

bin/kafka-server-start.sh config/server-2.properties &

创建topic

bin/kafka-topics.sh --create --bootstrap-server localhost:9092 --replication-factor 3 --partitions 1 --topic my-replicated-topic

查看topic状态

bin/kafka-topics.sh --describe --bootstrap-server localhost:9092 --topic my-replicated-topic