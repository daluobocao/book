# redis基础教程

## 基础命令

- keys

  用来列出所有满足特定正则字符串规则的 key

  ```
  127.0.0.1:6379> set test1 a
  OK
  127.0.0.1:6379> set test2 b
  OK
  127.0.0.1:6379> set test3 c
  OK
  127.0.0.1:6379> keys *
  1) "test1"
  2) "test2"
  3) "test3"
  127.0.0.1:6379> keys test*
  1) "test1"
  2) "test2"
  3) "test3"
  127.0.0.1:6379> keys t*3
  1) "test3"
  ```

  **存在问题**

  1. 没有分页，会把匹配的所有key都输出
  2. keys 算法是遍历算法，复杂度是 O(n)，如果实例中有千万级以上的 key，这个指令就会导致 Redis 服务卡顿，所有读写 Redis 的其它的指令都会被延后甚至会超时报错，因为 Redis 是单线程程序，顺序执行所有指令，其它指令必须等到当前的 keys 指令执行完了才可以继续

- scan

  使用：scan 游标数 keys正则匹配  limit  返回的是下一个游标数 和 返回数据 比如 scan 0 match key* count 1000

- GeoHash

  可以计算地理信息

  

  ## 数据结构

  

   

  ### redis常见问题

- 存在的key尽量避免过长，keys过多的场景，避免使用keys 搜索

- 