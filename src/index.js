/**
 * Cloudflare Workers 入口点
 * 这是一个简单的路由处理程序，可以根据需要扩展
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // 简单的路由处理
    switch (url.pathname) {
      case '/':
        return new Response('🚀 Practice Projects API is running!', {
          headers: { 'Content-Type': 'text/plain' },
        });

      case '/health':
        return new Response(JSON.stringify({
          status: 'healthy',
          timestamp: new Date().toISOString(),
          projects: [
            'HSD - React低代码平台',
            'student-management - 学生管理系统',
            'learn-react - React学习项目',
            'memo - 备忘录应用',
            'ebook - 电子书网站'
          ]
        }), {
          headers: { 'Content-Type': 'application/json' },
        });

      default:
        if (env.ASSETS) {
          // 如果有配置静态资源，尝试从那里提供
          return env.ASSETS.fetch(request);
        }

        return new Response('Not Found', {
          status: 404,
          headers: { 'Content-Type': 'text/plain' }
        });
    }
  },
};