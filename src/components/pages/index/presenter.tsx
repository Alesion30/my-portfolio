import style from './style.module.scss';
import Layout from '~/layouts/index';
import { CustomSpacer } from '~/components/uiParts/CustomSpacer';
import { ScrollIcon } from '~/components/uiParts/ScrollIcon';
import { TopLinkCard } from './TopLinkCard';
import { Intro } from './Intro';

export const TopPresenter: React.VFC = () => {
  return (
    <Layout>
      <h1 className={style.title}>
        Hi There👋 I&apos;m <span className={style.highlight}>Yuta Ohira!</span>
      </h1>
      <p className={style.description}>Web Engineer from Kyushu University</p>

      <div className={style.cardList}>
        <TopLinkCard title="About" description="経歴・スキルなど" href="/about" className={style.card} />
        <TopLinkCard title="Product" description="今まで作ってきたアプリ" href="/product" className={style.card} />
        <TopLinkCard title="Hobby" description="趣味" href="/hobby" className={style.card} />
        <TopLinkCard
          title="GitHub"
          description="GitHubのアカウントはこちら"
          href="https://github.com/Alesion30"
          blank
          className={style.card}
        />
      </div>

      <ScrollIcon />

      <CustomSpacer height={50} />

      <div className={style.introList}>
        <Intro
          title="23株式会社"
          description={`スタートアップから自治体まで、あらゆる挑戦に\n伴走する総合クリエイティブカンパニー`}
          src="/images/intro/23.png"
          link={{ title: 'HPはこちら', href: 'https://23-creative.co.jp/', blank: true }}
          className={style.intro}
        />
        <CustomSpacer height={100} />
        <Intro
          title="受注案件・個人開発"
          description={`React・Laravelを用いたWEB開発をはじめ、Flutterを用いたアプリ開発やArduino・Obnizを用いたIoTの開発など、さまざまなことにチャレンジしています`}
          src="/images/intro/work.png"
          link={{ title: 'PRODUCT一覧', href: '/product' }}
          className={style.intro}
          right
        />
      </div>

      <CustomSpacer height={80} />
    </Layout>
  );
};
