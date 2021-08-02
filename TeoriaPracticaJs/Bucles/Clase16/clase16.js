let signo = prompt('Cual es tu signo zodiacal? ');

switch (signo.toLowerCase()) {
  case 'acuario':
    console.log(
      'Elija nuevos rumbos, así vivirá una etapa de renovación. Intente desprenderse de aquello que le hace mal a su vida.'
    );
    break;
  case 'aries':
    console.log(
      'Durante esta jornada se podrían interponer diferentes obstáculos entre usted y las metas que se había fijado. Sea paciente.'
    );
    break;
  case 'tauro':
    console.log(
      'Su actitud emprendedora lo ayudará a conquistar nuevas oportunidades y a dejar atrás esa etapa poco satisfactoria.'
    );
    break;
  case ('geminis', 'géminis'):
    console.log(
      'Época ideal para que encuentre nuevas perspectivas en su vida. Permítase escuchar sus necesidades internas.'
    );
    break;
  case ('cancer', 'cáncer'):
    console.log(
      'Podrá correr el riesgo de confundirse y cometer errores si no frena a tiempo. Evite resolver todos los asuntos con rapidez.'
    );
    break;
  case 'leo':
    console.log(
      'Por más que le cueste, solo por hoy demuestre su tolerancia con aquellas personas que no tienen su mismo pensamiento.'
    );
    break;
  case 'virgo':
    console.log(
      'Relájese, su cuidado excesivo de los detalles podría provocarle un malhumor. No pretenda tener todo bajo control.'
    );
    break;
  case 'escorpio':
    console.log(
      'Sea más simpático, esas manifestaciones repentinas y violentas no lo ayudarán a mejorar su relación con el entorno.'
    );
    break;
  case 'sagitario':
    console.log(
      'Haga lo imposible por controlar sus estallidos emocionales. La Luna en su signo lo llevará a sobreactuar, resultará bueno que se modere.'
    );
    break;
  case 'capricornio':
    console.log(
      'Hoy sus indecisiones pueden alterar a quienes lo rodean, deje de lado sus vacilaciones y defina de una vez la situación en cuestión.'
    );
    break;
  case 'picis':
    console.log(
      'Etapa perfecta para obtener lo que desea. Tendrá nuevas posibilidades de alcanzar el éxito en el área del estudio o en lo profesional.'
    );
    break;

  default:
    console.log(`No se encontro el signo ingresado ${signo}`);
    break;
}
