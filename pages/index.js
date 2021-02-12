import { useMemo, useState } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Changelog from 'components/Changelog.jsx'
import Contributors from 'components/Contributors.jsx'
import Footer from 'components/Footer.jsx'
// import Progress from 'components/Progress.jsx'
// import Prevision from 'components/Prevision.jsx'
import Select from 'components/Select'
import I18nWidget from 'components/I18nWidget.jsx'
import Share from 'components/Share.jsx'
// import Table from 'components/Table.jsx'
import TimeAgo from 'components/TimeAgo.jsx'
import SchemeColorSwitcher from 'components/SchemeColorSwitcher'

import getGitHubContributors from 'services/getGitHubContributors'

import styles from 'styles/Home.module.css'
import useSearch from 'hooks/useSearchReport'
import ProgressChart from 'components/ProgressChart'
import {
  DosisAdministradasTooltip,
  DosisEntregadasTooltip
} from 'components/ProgressChart/tooltips'
import normalizeChartData from 'components/ProgressChart/utils/normalize-data'
import { useTranslate } from 'hooks/useTranslate'
import ClientSideComponent from 'components/ClientSideComponent'
// import SpainMap from 'components/SpainMap'
import { Card } from 'components/Card'

export default function Home ({
  contributors,
  data,
  info,
  reports,
  chartDatasets
}) {
  const [filter, setFilter] = useState('Totales')
  const [valueSearch, setValueSearch] = useState('')
  const reportFound = useSearch({ valueSearch })
  const translate = useTranslate()

  const totals = useMemo(
    () =>
      reportFound !== undefined
        ? reportFound.find(({ ccaa }) => ccaa === filter)
        : data.find(({ ccaa }) => ccaa === filter),
    [data, filter, reportFound]
  )

  return (
    <>
      <Head>
        <link
          rel='alternate icon'
          href='https://covid-vacuna.app/vacuna.png'
          type='image/png'
        />
        <link rel='manifest' href='/manifest.json' />
        <meta name='theme-color' content='#d2effd' />
        <link
          rel='alternate'
          href='https://covid-vacuna.app/'
          hrefLang='x-default'
        />
        {/* <link
          rel='alternate'
          href='https://covid-vacuna.app/es-CA'
          hrefLang='ca-es'
        />
        <link
          rel='alternate'
          href='https://covid-vacuna.app/es-GA'
          hrefLang='gl-es'
        />
        <link
          rel='alternate'
          href='https://covid-vacuna.app/es-EU'
          hrefLang='eu-es'
        />
        <link
          rel='alternate'
          href='https://covid-vacuna.app/es-ES'
          hrefLang='es-es'
        /> */}
      </Head>
      <div id='container' className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            {translate.home.tituloPricipal}{' '}
            {filter === 'Totales' ? 'México' : filter}
          </h1>
          <small className={styles.description}>
            {translate.home.datosActualizados}{' '}
            <TimeAgo timestamp={info.lastModified} />. {translate.home.fuente}{' '}
            <a href='https://www.gob.mx/salud/acciones-y-programas/versiones-estenograficas-conferencia-de-prensa'>
              {translate.home.ministerioDeSanidad}
            </a>
          </small>

          <Select data={reports} onChange={setValueSearch} />

          <div className={styles.grid}>
            {translate.home.cards.map((card, i) => (
              <Card
                key={i}
                styles={styles}
                translate={translate}
                totals={totals}
                card={card}
              />
            ))}
          </div>

          {/* <Progress totals={totals} reportFound={reportFound} />
          <Prevision totals={totals} /> */}

          <a className={styles.download} download href='/data/latest.json'>
            <Image
              width={32}
              height={32}
              src='/download.png'
              alt={translate.home.alt.descargarDatos}
            />
            {translate.home.descargarDatosJSON}
          </a>

          {/* <Link href='/como-incrustar'>
            <a className={styles.download}>
              <Image
                width={32}
                height={32}
                src='/embed.png'
                alt={translate.home.alt.incrustarDatos}
              />
              {translate.home.incrustarDatos}
            </a>
          </Link> */}
        </main>

        {/* <h2 className={styles.subtitle}>
          {translate.home.porComunidadesAutonomas}
        </h2>

        <SpainMap data={data} reportFound={reportFound} /> */}

        {/* <Table
          data={data}
          filter={filter}
          setFilter={setFilter}
          reportFound={reportFound}
        /> */}

        <h2 className={styles.subtitle}>
          {translate.home.evolucionDosisEntregadas}
        </h2>

        <ProgressChart
          dataset={chartDatasets.dosisRecibidas}
          tooltip={DosisEntregadasTooltip}
        />

        <h2 className={styles.subtitle}>
          {translate.home.evolucionDosisAdministradas}
        </h2>

        <ProgressChart
          dataset={chartDatasets.avanceAcumulado}
          tooltip={DosisAdministradasTooltip}
        />

        <h2 className={styles.subtitle}>
          {translate.home.fuenteDatosEnlacesInteres}
        </h2>
        <ul>
          <li>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://coronavirus.gob.mx/'
            >
              {translate.home.fuente1}
            </a>
          </li>
          <li>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://coronavirus.gob.mx/vacunacion-covid/'
            >
              {translate.home.fuente2}
            </a>
          </li>
        </ul>

        <h2 className={styles.subtitle}>{translate.home.changelog}</h2>
        <Changelog />

        {/* <h2 className={styles.subtitle}>{translate.home.enLosMedios}</h2>
        <ul>
          <li>
            <a
              className={styles.news}
              target='_blank'
              rel='noreferrer'
              href='https://www.20minutos.es/noticia/4552926/0/lanzan-una-web-con-datos-del-gobierno-que-permite-ver-como-avanza-en-espana-la-vacunacion-contra-el-coronavirus/'
            >
              {translate.home.medio1}
            </a>
          </li>
          <li>
            <a
              className={styles.news}
              target='_blank'
              rel='noreferrer'
              href='https://www.meneame.net/m/actualidad/web-revisar-estado-progreso-vacunacion-covid-19-espana'
            >
              {translate.home.medio2}
            </a>
          </li>
          <li>
            <a
              className={styles.news}
              target='_blank'
              rel='noreferrer'
              href='https://www.elconfidencial.com/tecnologia/ciencia/2021-01-24/vacunacion-web-campana-comunidad-autonoma_2918627/'
            >
              {translate.home.medio3}
            </a>
          </li>
        </ul>

        <h2 className={styles.subtitle}>{translate.home.contribuidores}</h2>
        <Contributors contributors={contributors} /> */}
      </div>

      <dialog id='vacunas-distribuidas-dialog'>
        <h2>Sobre las vacunas distribuidas</h2>
        <p>Las vacunas distribuidas...</p>
      </dialog>

      <ClientSideComponent>
        <SchemeColorSwitcher />
      </ClientSideComponent>

      <I18nWidget />

      {/* <Share /> */}

      <Footer />
    </>
  )
}

export async function getStaticProps () {
  const data = require('../public/data/latest.json')
  const info = require('../public/data/info.json')
  const reports = require('../public/data/reports.json')

  const contributors = await getGitHubContributors()
  const chartDatasets = normalizeChartData()

  return {
    props: {
      data,
      info,
      reports,
      chartDatasets,
      contributors
    }
  }
}
