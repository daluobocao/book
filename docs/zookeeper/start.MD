# zookeeper入门

### Download

### 单机模式

解压缩之后，创建conf/zoo.cfg文件，conf下有一个 zoo_sample.cfg文件 可以直接复制一样，基础配置如下

```
tickTime=2000
dataDir=/var/lib/zookeeper
clientPort=2181
```

- **tickTime** : 向zk发送心跳的时长，单位毫秒，这里代表2秒, 同时也是？
- **dataDir** : 数据存储位置
- **clientPort** : 监听端口

启动 bin/zkServer.sh start

### Connecting to ZooKeeper

```
bin/zkCli.sh -server 127.0.0.1:2181 或者 bin/zkCli.sh
```

### 基础操作命令

ls path [watch]: 显示目录

create [-s] [-e]  path data acl : 创建目录和数据 