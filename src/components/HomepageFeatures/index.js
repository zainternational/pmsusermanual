import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

/** Quick links aligned with pmsbackend and pmsfrontend features */
const SectionLinks = [
  {
    title: 'Quick started',
    description: 'Do these steps in order: login → dashboard → one reservation → check-in → folio.',
    to: '/quickstart',
  },
  {
    title: 'Getting Started',
    description: 'System overview, login, navigation, and by-role links for hotel staff.',
    to: '/intro',
  },
  {
    title: 'Operations',
    description: 'Dashboard, reservations, front desk, cashiering, housekeeping, night audit, and reports.',
    to: '/operations/overview',
  },
  {
    title: 'Configuration',
    description: 'Setup for rates, profiles, rooms, cashiering, housekeeping, and general settings.',
    to: '/configuration/overview',
  },
];

function SectionCard({title, description, to}) {
  return (
    <div className={clsx('col col--6 col--4-tablet', styles.card)}>
      <Link to={to} className={styles.cardLink}>
        <Heading as="h3" className={styles.cardTitle}>
          {title}
        </Heading>
        <p className={styles.cardDesc}>{description}</p>
        <span className={styles.cardCta}>View section →</span>
      </Link>
    </div>
  );
}

/** Start by role: same links as intro "By role" table — for users who land on homepage first */
const RoleLinks = [
  { role: 'Front desk', links: ['/operations/reservations/overview', '/operations/front-desk/overview', '/operations/dashboard'] },
  { role: 'Cashier', links: ['/operations/cashiering/overview'] },
  { role: 'Housekeeping', links: ['/operations/housekeeping/overview'] },
  { role: 'Night auditor', links: ['/operations/night-audit', '/operations/reports/overview'] },
  { role: 'Manager / admin', links: ['/operations/dashboard', '/operations/reports/overview', '/configuration/overview'] },
];

const roleLinkLabels = {
  '/operations/reservations/overview': 'Reservations',
  '/operations/front-desk/overview': 'Front Desk',
  '/operations/dashboard': 'Dashboard',
  '/operations/cashiering/overview': 'Cashiering',
  '/operations/housekeeping/overview': 'Housekeeping',
  '/operations/night-audit': 'Night Audit',
  '/operations/reports/overview': 'Reports',
  '/configuration/overview': 'Configuration',
};

export default function HomepageFeatures() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.twoColLayout}>
          <div className={styles.leftCol}>
            <h2 className={styles.sectionTitle}>Start by role</h2>
            <p className={styles.roleIntro}>
              First time here? <Link to="/general/using-this-manual">How to use this manual</Link> — search, shortcuts, and navigation.
            </p>
            <div className={styles.roleCardStack}>
              {RoleLinks.map(({ role, links }, idx) => (
                <div key={idx} className={styles.roleCard}>
                  <Heading as="h3" className={styles.cardTitle}>{role}</Heading>
                  <p className={styles.roleCardLinks}>
                    {links.map((to, i) => (
                      <span key={`${idx}-${i}`}>
                        {i > 0 && ' · '}
                        <Link to={to}>{roleLinkLabels[to] ?? to}</Link>
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.rightCol}>
            <h2 className={styles.sectionTitle}>Manual sections</h2>
            <p className={styles.manualIntro}>
              Browse by topic — from getting started and login to day-to-day operations and system configuration.
            </p>
            <div className={clsx('row', styles.manualGrid, styles.manualGridStack)}>
              {SectionLinks.map((props, idx) => (
                <SectionCard key={idx} {...props} />
              ))}
            </div>
          </div>
        </div>
        <p className={styles.sectionFooter}>
          See also: <Link to="/general/using-this-manual">Using this manual</Link>
          {' · '}
          <Link to="/operations/workflows">Workflows</Link>
          {' · '}
          <Link to="/general/troubleshooting">Troubleshooting</Link>
          {' · '}
          <Link to="/general/glossary">Glossary</Link>
          {' · '}
          <Link to="/general/roles-and-permissions">Roles & permissions</Link>
        </p>
      </div>
    </section>
  );
}
