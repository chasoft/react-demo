import * as React from 'react';

function MyCom({ anAction }: {anAction: () => string}) {
	const [text, setText] = React.useState("")
	console.log("MyCom re-rendered")
	return (
		<div style={{ padding: "20px", backgroundColor: "blue"}} onClick={()=>setText(anAction())} >

			Hello... {text}

		</div>
	)
}

export default React.memo(MyCom)

