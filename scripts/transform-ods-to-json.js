const XLSX = require('xlsx')

module.exports = async function transformOdsToJson (odsFileName) {
  const workbook = XLSX.readFile(`./public/data/${odsFileName}`)

  const { Sheets } = workbook
  const [firstKey] = Object.keys(Sheets)
  const sheet = Sheets[firstKey]

  const json = XLSX.utils.sheet_to_json(sheet)

  return json.map((element) => {
    const {
      __EMPTY: ccaa,
      'Fecha actualización': fecha,
      'Avance del día': avanceDiario,
      'Acumulado total': avanceAcumulado,
      'Total dósis recibidas': dosisRecibidas,
      'Primera dósis': dosisPrimerasAdministradas,
      'Segunda dósis': dosisSegundasAdministradas
    } = element

    return {
      ccaa: ccaa.trim(),
      fecha,
      avanceDiario,
      avanceAcumulado,
      dosisRecibidas,
      dosisPrimerasAdministradas,
      dosisSegundasAdministradas
      /* porcentajePoblacionAdministradas: dosisAdministradas / populationCCAA,
        porcentajePoblacionCompletas: dosisPautaCompletada / populationCCAA  */
    }
  })
}
