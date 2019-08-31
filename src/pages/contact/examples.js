import React from 'react'
import Link from 'gatsby-link'
import Layout from '../../components/Layout'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h2>著者プロフィール</h2>
              <p>
                長崎県出身のWebフリーランスエンジニア。
              </p>
              <p>
                フロントエンドをメインで担当しています。
              </p>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
