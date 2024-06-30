export default function PrivacyPage() {
	return (
		<div className="text-black mt-6 p-6 max-w-3xl mx-auto bg-white shadow-md rounded-lg">
			<h1 className="text-2xl font-bold mb-4">プライバシーポリシー</h1>
			<p className="mb-4">
				本サービス（以下「当サービス」）は、OpenID
				によるログインを通じて取得したメールアドレス（以下「メールアドレス」）を以下の方針に基づいて取り扱います。
			</p>

			<section className="mb-6">
				<h2 className="text-xl font-semibold mb-2">
					1. メールアドレスの利用目的
				</h2>
				<p className="mb-2">
					当サービスは、ユーザーのメールアドレスを以下の目的で利用します。
				</p>
				<ul className="list-disc list-inside ml-4">
					<li className="mb-1">サービスの改善およびユーザー体験の向上</li>
					<li className="mb-1">ユーザーへの重要なお知らせや情報の提供</li>
					<li className="mb-1">不正利用の防止およびセキュリティ強化</li>
				</ul>
			</section>

			<section className="mb-6">
				<h2 className="text-xl font-semibold mb-2">
					2. メールアドレスの第三者提供
				</h2>
				<p className="mb-2">
					当サービスは、ユーザーのメールアドレスを以下の場合を除き、第三者に提供しません。
				</p>
				<ul className="list-disc list-inside ml-4">
					<li className="mb-1">ユーザーの同意がある場合</li>
					<li className="mb-1">法令に基づく場合</li>
					<li className="mb-1">
						人の生命、身体または財産の保護のために必要であり、ユーザーの同意を得ることが困難である場合
					</li>
				</ul>
			</section>

			<section className="mb-6">
				<h2 className="text-xl font-semibold mb-2">3. 同意について</h2>
				<p className="mb-2">
					ユーザーが当サービスを利用することにより、本プライバシーポリシーに記載されているメールアドレスの取り扱いに同意したものとみなします。
				</p>
			</section>

			<section className="mb-6">
				<h2 className="text-xl font-semibold mb-2">
					4. プライバシーポリシーの変更
				</h2>
				<p className="mb-2">
					当サービスは、本プライバシーポリシーを適宜見直し、予告なく変更することがあります。変更があった場合は、当サービスのウェブサイトまたはアプリケーション上にてお知らせします。
				</p>
			</section>
		</div>
	);
}
