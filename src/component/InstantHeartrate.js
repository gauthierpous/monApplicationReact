function InstantHeartrate(props){
  const {data} = props
  let couleur = "rythmeBas"

  if(data > 60 && data < 160){
    couleur = "rythmeNormal"
  }
  if(data > 160){
    couleur = "rythmeEleve"
  }

  return(
    <div className={couleur}>Rythme cardiaque : {data}</div>
  )
}

export default InstantHeartrate;