import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-black">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              NeuroConscious Transformer
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              用 Transformer 重构意识神经科学
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">快速链接</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/technology" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                  技术概览
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                  文档中心
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                  关于项目
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">资源</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://github.com/wyg5208/nct" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://arxiv.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  arXiv 论文
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">联系</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>Yonggang Weng</li>
              <li>马来西亚理工大学 (UTM)</li>
              <li>WENG YONGGANG(翁勇刚)</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © 2026 NeuroConscious Transformer. MIT License.
          </p>
        </div>
      </div>
    </footer>
  );
}
