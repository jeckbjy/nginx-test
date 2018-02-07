# nginx-test

## 由浅入深,nginx几个例子
- reverse:      简单的http反向代理
- reverse-lb:   http反向代理加负载均衡
- reverse-https:https协议转化为http协议，app3仅转换，app4带有负载均衡
- reverse-wss : wss协议转化为ws协议，app3仅转换，app4带有负载均衡
- complex:      包含了上边各种情况，以及通过include子目录的方式配置

## 测试
由于mac下安全限制，并没有使用默认80和443端口，而是使用的8080和4433端口
- 1:将对应目录下的nginx.conf覆盖，并启动nginx，对于https,还需要拷贝cert安全证书,也可以自己生成,生成可参考    http://blog.csdn.net/yazhouren/article/details/9113117
- 2:启动服务器node ./src/server.js,
- 3:http和https在浏览器中输入域名即可
例如：
http://localhost:8080/app1
https://localhost:4433/app3
ws和wss启动node ./src/client.js测试