const Koa = require("koa");
const app = new Koa();
const router = require("./api/test");
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});
app.use(router.routes());
// app.listen(3000);
app.listen(3000, () => {
    console.log("服务器启动完毕!-http://127.0.0.1:3000/ ");
});
  