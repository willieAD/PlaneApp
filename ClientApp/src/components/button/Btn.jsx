import React from 'react'
import Button from 'reactstrap/lib/Button'
import './Btn.css'

export default function btn() {
	// Close the dropdown if the user clicks outside of it
	function openlist() {
		//	var dropdowns = document.createElement('li');
		var i
		for (i = 0; i < 3; i++) {
			// var openDropdown = dropdowns[i]
			// if (openDropdown.classList.contains('show')) {
			// 	openDropdown.classList.remove('show')
			// }
			console.log('clicked')
		}
	}

	return (
		<div>
			<Button className="btn" onClick={() => openlist()}>
				To
			</Button>
			<Button>From</Button>
		</div>
	)
}
