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
              <h3>職業</h3>
              <br/>
              <h4>フロントエンドエンジニア</h4>
              <br/>
              <p>現在25歳。都内のメガベンチャーに勤務しながら個人で受注したサービス開発や趣味で開発を行なっています。</p>
              <p>新規HTML5ゲームの初期立ち上げ〜リリースを2タイトル経験、現在はWebサービスの開発を担当しています</p>
              <br/>
              <h3>経歴</h3>
              <p>長崎の工業高校を卒業を機に上京し株式会社東芝に新卒入社。4年間勤務する</p>
              <p>独学でプログラミングを学習し22歳のときにWebエンジニアにキャリアチェンジ</p>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
