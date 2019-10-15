import React from 'react'
// import Link from 'gatsby-link'
import Layout from '../../components/Layout'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h2>著者プロフィール</h2>
              <h3>出身</h3>
              <p>長崎県出身、1994年生まれの25歳</p>
              <h3>職業</h3>
              <br/>
              <h4>フロントエンドエンジニア</h4>
              <br/>
              <p>現在は都内のメガベンチャーに勤務しながら個人で受注した開発や趣味での行なっています</p>
              <p>新規HTML5ゲームの初期立ち上げ〜リリースを2タイトル経験。</p>
              <p>ネイティブに負けないゲームの開発に2年ほど従事していました。</p>
              <br/>
              <p>スキルはゲームに寄っていますがWebサービスの開発に興味があり、現在はWebサービスの開発を担当しております。</p>
              <br/>
              <h3>経歴</h3>
              <p>工業高校を卒業後、東芝に入社。4年間勤務する</p>
              <p>独学でプログラミングを学習しエンジニアにキャリアチェンジ</p>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
