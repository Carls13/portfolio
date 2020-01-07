export const formatText = (text) => {
	if (text) {
		return text.map((paragraph, i) => {
			switch (paragraph.nodeType) {
				case 'paragraph':
					const currentParagraph = <p>{formatParagraph(paragraph)}</p>
					if (i === text.length - 1) {
						return <React.Fragment>
							{ currentParagraph }
								<br/>
							</React.Fragment>
					} else {
						return currentParagraph
					}
				case 'embedded-asset-block':
					const { url } = paragraph.data.target.fields.file;
					return <img src={url} className="articleBodyImage"/>
				default:
					const thisParagraph = <p>{formatParagraph(paragraph)}</p>
						if (i === text.length - 1) {
							return <React.Fragment>
								{ thisParagraph }
									<br/>
								</React.Fragment>
						} else {
							return thisParagraph
						}
				}
			})
		}
	}

export const formatParagraph = (paragraph) => {
	if (paragraph) {
		const formattedParagraph = paragraph.content.map((element, j) => {
			switch (element.nodeType) {
				case 'text':
					if (element.marks.length > 0) {
						switch (element.marks[0].type) {
							case 'bold':
								return <b>{element.value}</b>
							default:
								return <b>{element.value}</b>
						}
					} else {
						return element.value;
					}
				case 'hyperlink':
					return <a href={element.data.uri} target="_blank">{element.content[0].value}</a>
				default: 
					if (element.marks.length > 0) {
						switch (element.marks[0].type) {
							case 'bold':
								return <b>{element.value}</b>
							default:
								return <b>{element.value}</b>
						}
					} else {
						return element.value;
					}
			}
		})

		return formattedParagraph;
	}
}