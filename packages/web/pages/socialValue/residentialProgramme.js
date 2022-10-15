import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

import Page from 'components/page';
import Breadcrumbs from 'components/Breadcrumbs';
import { DefaultHeader } from 'components/Header';
import Footer from 'components/Footer';
import SocialValueHowItWorks from 'modules/SocialValue/ResidentalProgramme/SocialValueHowItWorks';
import { SocialValueRehabilitate } from 'modules/SocialValue/ResidentalProgramme/SocialValueRehabilitate';
import { SocialValueHeader, SocialValueArticle, SocialValuePartnersImpact } from 'modules/SocialValue/components';
import {
  supporting,
  inspiring,
  employing,
  independentLiving,
  rehabilitation,
  mealDelivery,
  savings,
} from 'static/images/icons';
import {
  socialValueMainPeople2,
  hmpArticle31,
  hmpArticle32,
  howItWorks11,
  howItWorks12,
  howItWorks21,
  howItWorks22,
  howItWorks31,
  howItWorks32,
  howItWorks41,
  howItWorks42,
  howItWorks51,
  howItWorks52,
  howItWorks61,
  howItWorks62,
} from 'static/images';

export const BREADCRUMBS = [
  {
    name: 'Social value',
    link: '/social-value',
  },
  {
    name: 'Residential programme',
    link: '/social-value/residential-programme',
  },
];

const SocialValueResidentialProgramme = ({
  title,
  headerTitle,
  articleHeader,
  articleSubHeader,
  articleText,
  impactHeaderTitle,
  impactHeaderText,
  impactOptionsTitle,
  options,
  articleHeader2,
  articleSubHeader2,
  articleText2,
  rehabilitateTitle,
  rehabilitateDescription,
  rehabilitateArticleItems,
  howItWorksHeader,
  howItWorksText,
  howItWorksItems,
}) => (
  <Page title={title}>
    <DefaultHeader />
    <main className="social-value residential-programme">
      <SocialValueHeader title={headerTitle} />
      <Container className="breadcrumbs-container">
        <div className="bg-before-light">
          <Breadcrumbs breadcrumbs={BREADCRUMBS} />
        </div>
      </Container>
      <SocialValueArticle
        header={articleHeader}
        subHeader={articleSubHeader}
        text={articleText}
        imageSrc1={hmpArticle31}
        imageSrc2={hmpArticle32}
        bg="light-gray"
      />
      <SocialValuePartnersImpact>
        <SocialValuePartnersImpact.Header title={impactHeaderTitle} text={impactHeaderText} />
        <SocialValuePartnersImpact.Options title={impactOptionsTitle}>
          {options.map(option => (
            <SocialValuePartnersImpact.Options.Option key={option.id} {...option} />
          ))}
        </SocialValuePartnersImpact.Options>
      </SocialValuePartnersImpact>
      <SocialValueArticle
        header={articleHeader2}
        subHeader={articleSubHeader2}
        text={articleText2}
        imageSrc1={socialValueMainPeople2}
        imageSrc2={socialValueMainPeople2}
        bg="light-gray"
      />
      <SocialValueRehabilitate
        title={rehabilitateTitle}
        description={rehabilitateDescription}
        articleItems={rehabilitateArticleItems}
      />
      <SocialValueHowItWorks>
        <SocialValueHowItWorks.Article header={howItWorksHeader} text={howItWorksText} />
        {howItWorksItems.map(({ id, images, howItWorksArticleHeader, howItWorksArticleText }, i) => (
          <SocialValueHowItWorks.Point
            key={id}
            num={i + 1}
            images={images}
            articleHeader={howItWorksArticleHeader}
            articleText={howItWorksArticleText}
            dashedRowPosition={
              i === 0
                ? 'dashed-row-position-bottom'
                : i === howItWorksItems.length - 1
                  ? 'dashed-row-position-top'
                  : 'dashed-row-position-full'
            }
            sectionColor={i % 2 ? 'bg-gray' : 'bg-white'}
          />
        ))}
      </SocialValueHowItWorks>
    </main>
    <Footer />
  </Page>
);

SocialValueResidentialProgramme.propTypes = {
  title: PropTypes.string,
  headerTitle: PropTypes.string,
  articleHeader: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  articleSubHeader: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  articleText: PropTypes.string,
  impactHeaderTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  impactHeaderText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  impactOptionsTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
    }),
  ),
  articleHeader2: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  articleSubHeader2: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  articleText2: PropTypes.string,
  rehabilitateTitle: PropTypes.string,
  rehabilitateDescription: PropTypes.string,
  rehabilitateArticleItems: PropTypes.array,
  howItWorksHeader: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  howItWorksText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  howItWorksItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      images: PropTypes.arrayOf(PropTypes.string),
      articleHeader: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      articleText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    }),
  ),
};

SocialValueResidentialProgramme.getInitialProps = () => ({
  title: 'Residential',
  headerTitle: 'Car.service supports a residential programme <strong>helping to tackle homelessness</strong>',
  articleHeader: '<strong>Inspiring meaningful skills to help people thrive</strong>',
  articleSubHeader: '',
  impactHeaderTitle: `<strong>Impact of our partnerships</strong>`,
  impactHeaderText: `Helping to tackle homelessness doesn’t just benefit the individuals and families involved – it also has a tangible impact on society as a whole.`,
  articleText:
    '<p>It’s estimated that homelessness affects over 320,000 people here in the UK – although\n' +
    'some housing charities suggest that the actual figure is actually much higher. Homelessness\n' +
    'often occurs alongside other complex issues for individuals too – making the transition into\n' +
    'stable living arrangements and employment especially difficult.\n' +
    '<br />' +
    '<br />' +
    'When you use Car.service, you’re helping us to support a partner charity that provides vital\n' +
    'assistance for people who may not otherwise have a safe place to sleep.\n' +
    '<br />' +
    '<br />' +
    'There’s more to tackling homelessness than just providing beds though. The organisation\n' +
    'we work with provides accommodation and a programme that allows residents to build\n' +
    'solid life and vocational skills. These skills help people regain control of their lives, obtain\n' +
    'their own tenancies – and find employment that will provide financial stability moving\n' +
    'forward.\n' +
    '<br />' +
    '<br />' +
    'There’s no quick-fix for the issue of homelessness around the country – but at Car.service,\n' +
    'we’re helping an organisation that supports people to make meaningful, long-lasting\n' +
    'changes that mean they can move forward; relying less on state-provided housing and\n' +
    'benefits.</p>\n',
  impactOptionsTitle: `In the last three years:`,
  options: [
    {
      id: 1,
      icon: independentLiving,
      value: 85,
      label: 'hours of work-based training completed by every resident',
    },
    {
      id: 2,
      icon: rehabilitation,
      value: 8,
      label: 'vocational qualifications achieved by each person completing the programme',
    },
    {
      id: 3,
      icon: mealDelivery,
      value: 6,
      label: 'people supported into independent living and full-time employment just last year',
    },
    {
      id: 4,
      icon: savings,
      value: '£167,345',
      label: 'annual saving to society through reduced benefit costs to local authorities',
    },
  ],
  articleHeader2: '<strong>What does residential support offer society?</strong>',
  articleSubHeader2: '',
  articleText2:
    '<p>For individuals making the transition from homelessness onto lifelong positive paths, the\n' +
    'impact of residential support cannot be underestimated – but what does this kind of\n' +
    'support offer the wider community?\n' +
    '<br />' +
    '<br />' +
    'Sadly, homelessness is often wrapped in a series of other complex issues – including\n' +
    'addictions, physical and mental health concerns, and sometimes a reliance on crime.\n' +
    'Creating a stable base for a person provides a platform from which these other issues can\n' +
    'be addressed – enormously reducing the strain on taxpayer-funded health services and local\n' +
    'authority provisions.\n' +
    '<br />' +
    '<br />' +
    'By engaging with structured approaches that develop work and life skills, residents’ self-\n' +
    'esteem transforms – helping to ensure tenancies and employment become permanent\n' +
    'factors in their lives. As a result, dependency on social housing and the benefits system isn’t\n' +
    'just eased – but individuals become taxpayers themselves; contributing to a system they\n' +
    'once relied on.\n' +
    '<br />' +
    '<br />' +
    'Homelessness will continue to cost the UK a considerable amount for some time yet – but\n' +
    'with the help of Car.service customers, meaningful steps toward permanent improvements\n' +
    'are taking place at our partner’s residential programmes every day.</p>\n',
  rehabilitateTitle: '<strong>What does rehabilitation involve?</strong>',
  rehabilitateDescription:
    'Residents have a lot of work in front of them when they join our partner charity – but that\n' +
    'work’s underpinned by a supportive structure that ensures a meaningful, independent life.\n',
  rehabilitateArticleItems: [
    {
      title: 'Supporting',
      description:
        'Having a safe place to stay is essential; so residents can be helped regain confidence and\n' +
        'build skills from a place of security and predictability.\n',
      definition: 'Accomodation',
      icon: supporting,
    },
    {
      title: 'Inspiring',
      description:
        'A range of training opportunities is provided, helping residents build a solid work ethic and\n' +
        'skills that translate into real-world employability.\n',
      definition: 'Education &amp; Training',
      icon: inspiring,
    },
    {
      title: 'Employing',
      description:
        'By establishing links with large organisations, our partner charity can help people find\n' +
        'relevant work experience and long-term positions.\n',
      definition: 'Word Experience',
      icon: employing,
    },
  ],
  howItWorksHeader: '<strong>How it works for residents</strong>',
  howItWorksText:
    'When you use Car.service, you’re helping us to support a structured six-stage programme\n' +
    'that residents will work through at their own pace. The programme is designed to inspire\n' +
    'confidence, build resilience, and establish usable life skills.\n',
  howItWorksItems: [
    {
      id: 1,
      images: [howItWorks11, howItWorks12],
      howItWorksArticleHeader: '<strong>Induction and wellbeing</strong>',
      howItWorksArticleText:
        'Residents are welcomed and supported to establish a stable routine. As well as registering\n' +
        'with a doctor, dentist, and bank, individuals also obtain a food hygiene certificate, do some\n' +
        'budget planning, and complete a health and safety course.\n',
    },
    {
      id: 2,
      images: [howItWorks21, howItWorks22],
      howItWorksArticleHeader: '<strong>Personal Development</strong>',
      howItWorksArticleText:
        'As individuals begin considering a career path, equipment, training, and skills are provided\n' +
        'to support that journey. Further food safety qualifications are achieved – helping residents\n' +
        'readapt to learning and appreciate the need for vocational qualifications.\n',
    },
    {
      id: 3,
      images: [howItWorks31, howItWorks32],
      howItWorksArticleHeader: '<strong>Building a work ethic</strong>',
      howItWorksArticleText:
        'Residents begin to explore what’s required to find and maintain a tenancy and learn about\n' +
        'creating a CV. Individuals are given the opportunity to sit a Construction Skills Certificate\n' +
        'Scheme (CSCS) exam – opening up a huge range of construction-based opportunities.\n',
    },
    {
      id: 4,
      images: [howItWorks41, howItWorks42],
      howItWorksArticleHeader: '<strong>Career development</strong>',
      howItWorksArticleText:
        'Further learning, work experience, and training is tailored to an individual’s personal career\n' +
        'path and skillset. Alongside this personalised development, a three-day Emergency First Aid\n' +
        'at Work course adds another desirable skill to a growing CV.\n',
    },
    {
      id: 5,
      images: [howItWorks51, howItWorks52],
      howItWorksArticleHeader: '<strong>Employment training</strong>',
      howItWorksArticleText:
        'As work-based training and experience grows, skills are further bolstered to prepare\n' +
        'residents for full-time employment. Individuals are given an opportunity to earn a Fork Lift\n' +
        'Truck operations qualification, unlocking further potential roles.\n',
    },
    {
      id: 6,
      images: [howItWorks61, howItWorks62],
      howItWorksArticleHeader: '<strong>Achieving independence</strong>',
      howItWorksArticleText:
        'Residents will be offered full-time employment – and one-to-one support is offered to help\n' +
        'with this transition, along with the move to own accommodation. A range of tenancy skills\n' +
        'are learned too, helping to make an individual’s new home their own – and plan for a\n' +
        'positive future.\n',
    },
  ],
});

export default SocialValueResidentialProgramme;
