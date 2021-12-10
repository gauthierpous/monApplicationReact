function InstantHeartrate(props){
  const {data} = props
  let couleur = "rythmeBas"

  if (!data){return(<p>Pas de valeurs</p>)}

  if(data.heartrate > 60 && data.heartrate < 160){
    couleur = "rythmeNormal"
  }
  if(data.heartrate > 160){
    couleur = "rythmeEleve"
  }

  return(
    <div className={couleur}>Rythme cardiaque : {data.heartrate}</div>
  )
}

export default InstantHeartrate;