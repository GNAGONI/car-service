import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

import Page from 'components/page';
import Breadcrumbs from 'components/Breadcrumbs';
import { DefaultHeader } from 'components/Header';
import { SocialValueOurProgramme, SocialValueReleaseStatistics } from 'modules/SocialValue/HmpAcademies';
import Footer from 'components/Footer';
import {
  financialIncentives,
  qualificationsAndTraining,
  transferableSkills,
  smoothTransition,
  realJobProspects,
  independentLiving,
  rehabilitation,
  mealDelivery,
  savings,
} from 'static/images/icons';

import { SocialValueHeader, SocialValuePartnersImpact, SocialValueArticle } from 'modules/SocialValue/components';
import { hmpArticle11, hmpArticle12, hmpArticle21, hmpArticle22, hmpArticle31, hmpArticle32 } from 'static/images';

export const BREADCRUMBS = [
  {
    name: 'Social value',
    link: '/social-value',
  },
  {
    name: 'HMP Academies',
    link: '/social-value/hmp-academies',
  },
];

const SocialValueHMPAcademies = ({
  title,
  ourProgrammeTitle,
  ourProgrammeDescription,
  ourProgrammeArticleItems,
  headerTitle,
  impactHeaderTitle,
  impactHeaderText,
  impactOptionsTitle,
  options,
  articleHeader1,
  articleSubHeader1,
  articleText1,
  articleHeader2,
  articleSubHeader2,
  articleText2,
  articleHeader3,
  articleSubHeader3,
  articleText3,
  releaseStatisticsTitle,
  releaseStatisticsText,
  releaseStatisticsOptions,
}) => (
  <Page title={title}>
    <DefaultHeader />
    <main className="social-value  social-value-hmp-academies">
      <SocialValueHeader title={headerTitle} />
      <div className="bg-before-light">
        <Container className="breadcrumbs-container">
          <Breadcrumbs breadcrumbs={BREADCRUMBS} />
        </Container>
        <SocialValueArticle
          header={articleHeader1}
          subHeader={articleSubHeader1}
          text={articleText1}
          imageSrc1={hmpArticle11}
          imageSrc2={hmpArticle12}
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
          imageSrc1={hmpArticle21}
          imageSrc2={hmpArticle22}
          bg="gray"
        />
        <SocialValueReleaseStatistics>
          <SocialValueReleaseStatistics.Header title={releaseStatisticsTitle} text={releaseStatisticsText} />
          <SocialValueReleaseStatistics.Options>
            {releaseStatisticsOptions.map(({ id, value, label }, i) => (
              <SocialValueReleaseStatistics.Options.Option
                key={id}
                className={`social-value-release-statistics-percent--${i + 1}`}
                value={value}
                label={label}
              />
            ))}
          </SocialValueReleaseStatistics.Options>
        </SocialValueReleaseStatistics>
        <SocialValueArticle
          header={articleHeader3}
          subHeader={articleSubHeader3}
          text={articleText3}
          imageSrc1={hmpArticle31}
          imageSrc2={hmpArticle32}
          bg="dark-gray"
        />
        <SocialValueOurProgramme
          title={ourProgrammeTitle}
          description={ourProgrammeDescription}
          articleItems={ourProgrammeArticleItems}
        />
      </div>
    </main>
    <Footer />
  </Page>
);

SocialValueHMPAcademies.propTypes = {
  title: PropTypes.string,
  ourProgrammeTitle: PropTypes.string.isRequired,
  ourProgrammeDescription: PropTypes.string,
  ourProgrammeArticleItems: PropTypes.array,
  headerTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
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
  articleHeader1: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  articleSubHeader1: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  articleText1: PropTypes.string,
  articleHeader2: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  articleSubHeader2: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  articleText2: PropTypes.string,
  articleHeader3: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  articleSubHeader3: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  articleText3: PropTypes.string,
  releaseStatisticsTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  releaseStatisticsText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  releaseStatisticsOptions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
    }),
  ),
};

SocialValueHMPAcademies.getInitialProps = () => ({
  title: 'HMP Academies',
  ourProgrammeTitle: '<strong>Our programme</strong>',
  ourProgrammeDescription:
    'Our partner’s rehabilitation programme has been created to help offenders develop a strong work ethic, readying them for the challenges that wait beyond release.',
  ourProgrammeArticleItems: [
    {
      title: '<strong>Financial incentives</strong>',
      description:
        'Bonuses for exceeding targets encourage engagement – as well as creating a wage that can be used to contribute to victim funds.',
      icon: financialIncentives,
    },
    {
      title: '<strong>Qualifications and training</strong>',
      description:
        'Gaps in education can be identified, and offenders can be supported to learn; helping to increase the chance of employment post-release.',
      icon: qualificationsAndTraining,
    },
    {
      title: '<strong>Transferable skills</strong>',
      description:
        'A range of work-related skills are taught alongside employment, so ex-offenders stand out as strong candidates for employment.',
      icon: transferableSkills,
    },
    {
      title: '<strong>Smooth transition</strong>',
      description:
        'Temporary accommodation is available upon release, allowing individuals to register with healthcare, receive post, and establish a base.',
      icon: smoothTransition,
    },
    {
      title: '<strong>Real job prospects</strong>',
      description:
        'Our partner charity actively maintains relationships with a number of significant employers, helping to secure meaningful long-term roles.',
      icon: realJobProspects,
    },
  ],
  headerTitle: `Car.service <strong>helps to support</strong> HMP Academies across the country`,
  impactHeaderTitle: `<strong>Impact of our partnerships</strong>`,
  impactHeaderText: `The HMP Academies you help us support have a significant impact – both for ex-offenders and taxpayer-funded services.`,
  impactOptionsTitle: `In the last three years:`,
  options: [
    {
      id: 1,
      icon: independentLiving,
      value: 12,
      label: 'HMP Academies now running in 11 prisons across the North of England',
    },
    {
      id: 2,
      icon: rehabilitation,
      value: '5%',
      label: 'reoffending rate after programme completion – versus a 67% national average',
    },
    {
      id: 3,
      icon: mealDelivery,
      value: 136,
      label: 'individuals successfully rehabilitated',
    },
    {
      id: 4,
      icon: savings,
      value: '£9.8m',
      label: 'social value savings created for taxpayer-funded services',
    },
  ],
  articleHeader1: '<strong>Reducing reoffending</strong> through training and employment opportunities',
  articleSubHeader1: '',
  articleText1: '<p>Over 60% of people released from prison go on to reoffend within a year of release. As a\n' +
    'result, reoffending costs the UK upward of £10 billion every year – but it’s a cycle that we’re\n' +
    'helping to break. At Car.service, we support an organisation that creates and runs\n' +
    'employment training academies within HM Prisons – giving people a chance to learn skills\n' +
    'that can be used to take their life forward after release.\n' +
    '<br />' +
    '<br />' +
    'The skills and qualifications that offenders work towards are meaningful and tailored to the\n' +
    'talents and interests of the individual. In prison-based workshops, there are a range of\n' +
    'fabrication and recycling roles – each offering transferrable skills and the chance of\n' +
    'nationally recognised qualifications.\n' +
    '<br />' +
    '<br />' +
    'Beyond release, support and training can continue – with residential opportunities often\n' +
    'available that help people track down employment and stable housing. As a result,\n' +
    'reoffending rates are dramatically reduced – with less than 5% of individuals who take part\n' +
    'going on to reoffend. Our support of HMP Academies doesn’t just help people change their\n' +
    'lives; it also has a positive impact on crime rates around the country.</p>',
  articleHeader2: '<strong>How does a rehabilitation programme work?</strong>',
  articleSubHeader2: '',
  articleText2: '<p>There’s no simple explanation for why people commit offences – and there’s no simple way\n' +
    'to help people move their lives back toward more positive options. As such, a rehabilitation\n' +
    'programme is carefully developed to create a work ethic and prepare people for life after\n' +
    'release.\n' +
    '<br />' +
    '<br />' +
    'Generally, a programme will begin with financial incentives – either for employment\n' +
    'positions within prison or for offenders released on temporary licence. As well as providing\n' +
    'an opportunity for offenders, 40% of this income is donated to victim support funds.\n' +
    '<br />' +
    '<br />' +
    'Where gaps in education and experience are identified, access to training is offered – which,\n' +
    'along with the work ethic that is developed through available roles, provides a much greater\n' +
    'chance of employment upon release.\n' +
    '<br />' +
    '<br />' +
    'If necessary, supported accommodation can be provided after release too – something\n' +
    'which 60% of prisoners suggest is the most important factor in preventing reoffending. In\n' +
    'the time after release, a work and accommodation programme is completed – and the\n' +
    'chance of employment with a number of the charity’s partners can be explored.\n' +
    '<br />' +
    '<br />' +
    'When you use Car.service, you help us to provide funding that supports programmes like\n' +
    'these – helping individuals change their lives – and helping to make society a safer place.</p>',
  articleHeader3: '<strong>Supporting people to readapt to life outside prison</strong>',
  articleSubHeader3: '',
  articleText3: '<p>While there are solid vocation skills to obtain in HMP Academy workshops and partner\n' +
    'employment programmes, there’s a great deal more to life after prison than just work skills.\n' +
    '<br />' +
    '<br />' +
    'Our partner charity has a specialist Release Potential team that provides assistance and\n' +
    'training around the wider life skills that are needed to maintain work, obtain and keep a\n' +
    'tenancy, and – importantly – readapt to life as part of a family; often with input from social\n' +
    'services.\n' +
    '<br />' +
    '<br />' +
    'This journey can be made especially difficult if an individual needs specialist support for\n' +
    'substance misuse or mental health issues – on top of the other challenges that release can\n' +
    'present. As such, practical and personal support is open-ended, and can often include\n' +
    'meeting ex-offenders at the gates on the date of their release; supporting with job\n' +
    'interviews or property viewings; and helping to arrange and attend medical appointments.\n' +
    '<br />' +
    '<br />' +
    'Support of this kind is arranged on a person by person basis – and is often key to helping an\n' +
    'individual maintain the positive journey they’ve started in the prison workshop.</p>',
  releaseStatisticsTitle: 'UK offender <strong>release statistics</strong>',
  releaseStatisticsText:
    'Currently, the majority of prisoners will reoffend after release – however, there are factors which are likely to decrease the chance of this happening.',
  releaseStatisticsOptions: [
    {
      id: 1,
      value: 60,
      label:
        'of adults who leave prison with no qualifications will be reconvicted with one year. This level of reoffending costs the UK over £10 billion each year.',
    },
    {
      id: 2,
      value: 68,
      label:
        'of prisoners asked feel that meaningful employment would be the thing that prevents them from reoffending after release',
    },
    {
      id: 3,
      value: 60,
      label:
        'of prisoners asked felt like having somewhere to live is an important part of preventing reoffending after release',
    },
  ],
});

export default SocialValueHMPAcademies;
