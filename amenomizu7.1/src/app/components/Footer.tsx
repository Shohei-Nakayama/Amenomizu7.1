import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-t from-blue-100 to-blue-50 border-t border-blue-200 mt-auto py-4">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} あめのみづ鍼灸院. All rights reserved.</p>
          <span className="hidden sm:inline">|</span>
          <Link href="/privacy" className="hover:text-blue-600 transition-colors duration-200">
            プライバシーポリシー
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
