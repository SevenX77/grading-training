import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "页面未找到 - 短剧调色培训",
	description: "抱歉，您访问的页面不存在。",
};

export default function NotFound() {
	return (
		<div className="container flex flex-col items-center justify-center min-h-[70vh] px-4 py-16 text-center">
			<h1 className="text-6xl font-bold tracking-tighter mb-4">404</h1>
			<h2 className="text-2xl font-semibold mb-6">页面未找到</h2>
			<p className="text-muted-foreground mb-8 max-w-md">抱歉，您访问的页面不存在或已被移动到其他位置。</p>
			<div className="flex gap-4">
				<Link
					href="/"
					className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
				>
					返回首页
				</Link>
				<Link
					href="/basics"
					className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
				>
					基础知识
				</Link>
			</div>
		</div>
	);
}
