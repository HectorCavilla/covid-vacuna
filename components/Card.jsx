/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable no-unused-expressions */
/* eslint-disable multiline-ternary */
import NumberDigits from './NumberDigits'
import NumberPercentage from './NumberPercentage.jsx'

import Image from 'next/image'

export const Card = ({ styles, translate, totals, card }) => {
    return (
        <div className={styles.card}>
            <button
              title='Abrir diálogo con explicación sobre Dosis Distribuidas'
              onClick={() => { }}
            >
                ❔
            </button>

            <header>
                <Image
                  className={styles.cardImage}
                  src={card.icono}
                  alt={card.alt}
                  width={150}
                  height={150}
                  priority
                />
            </header>
            <section>
                <div>
                    <h3>{card.titulo}</h3>

                    <p>
                        {
                            (() => {
                                if (card.id === 'dist') {
                                    return isNaN(totals.dosisRecibidas) ? (
                                        'Desconocido'
                                    ) : (
                                            <NumberDigits>{totals.dosisRecibidas}</NumberDigits>
                                        )
                                }
                                if (card.id === 'admin') {
                                    return isNaN(totals.avanceDiario) ? (
                                        'Desconocido'
                                    ) : (
                                            <NumberDigits>{totals.avanceDiario}</NumberDigits>
                                        )
                                    // eslint-disable-next-line no-unused-expressions
                                } else (card.id === 'pauta')
                                return isNaN(totals.avanceAcumulado) ? (
                                    'Desconocido'
                                ) : (
                                        <NumberDigits>{totals.avanceAcumulado}</NumberDigits>
                                    )
                            })()
                        }
                    </p>
                </div>
                <div>
                    {
                        (() => {
                            if (card.id === 'dist') {
                                return (
                                    <>
                                        {/* {card.labs.map((lab, i) => (
                                            <small key={i}>
                                                <Image
                                                  alt={lab.alt}
                                                  className={styles.companyLogo}
                                                  src={lab.logo}
                                                  height={lab.h}
                                                  width={lab.w}
                                                  priority
                                                />
                                                <span>
                                                    {
                                                        (() => {
                                                            if (lab.nombre === 'Pfizer') {
                                                                return (
                                                                    <>
                                                                        {isNaN(totals.dosisEntregadasPfizer) ? 'Desconocido' : <NumberDigits>{totals.dosisEntregadasPfizer}</NumberDigits>}
                                                                    </>
                                                                )
                                                            }
                                                            if (lab.nombre === 'Moderna') {
                                                                return (
                                                                    <>
                                                                        {isNaN(totals.dosisEntregadasModerna) ? 'Desconocido' : <NumberDigits>{totals.dosisEntregadasModerna}</NumberDigits>}
                                                                    </>
                                                                )
                                                            }
                                                        })()
                                                    }

                                                </span>
                                            </small>
                                        ))} */}
                                    </>
                                )
                            }

                            if (card.id === 'admin') {
                                return (
                                    <>
                                        {/* <h4>{translate.terminos.sobreDistribuidas}</h4>
                                        <p className={styles.secondary}>
                                            {isNaN(totals.porcentajeEntregadas) ? (
                                                'Desconocido'
                                            ) : (
                                                    <NumberPercentage>
                                                        {totals.porcentajeEntregadas}
                                                    </NumberPercentage>
                                                )}
                                        </p> */}
                                    </>
                                )
                            } else (card.id === 'pauta')
                            return (
                                <>
                                    <h4>{translate.terminos.sobreAdministradas}</h4>
                                    <p className={styles.secondary}>
                                        {isNaN(totals.dosisRecibidas) ||
                                            isNaN(totals.avanceAcumulado) ? (
                                                'Desconocido'
                                            ) : (
                                                <NumberPercentage>
                                                    {totals.avanceAcumulado /
                                                        totals.dosisRecibidas}
                                                </NumberPercentage>
                                            )}
                                    </p>
                                </>
                            )
                        })()
                    }
                </div>
            </section>
        </div>
    )
}
