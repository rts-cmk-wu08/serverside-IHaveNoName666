



async function getStarted() {
    return (await fetch(`http://localhost:4000/started`, { next: { revalidate: 30 } })).json()
}

export default async function SwankyStarted() {

  const started = await getStarted()
  const icons = started.bullets
  return (
    <div>
                <p>{started.headline}</p>
                <p>{started.text}</p>
            {icons?.map(icon =>
                            <div key={icon.id}>
                                {icon.icon}
                                    <p>{icon.name}</p>
                                    <p>{icon.text}</p>    
                            </div>
			            )}
    </div>
  )
}
