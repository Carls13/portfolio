const handleTextMarks = (element, j) => {
	if (element.marks.length > 0) {
		switch (element.marks[0].type) {
			case 'bold':
				return <b key={j}>{element.value.trim()}</b>
			case 'code':
				return (
					<span key={j} className="line-numbers">
				        <code className="language-js">
				          {element.value}
				        </code>
			        </span>
	       			);
			default:
				return <b key={j}>{element.value}</b>
		}
	} else {
		return element.value;
	}
};

const handleParagraph = (paragraph, i, text) => {
	const currentParagraph = <p key={i}>{formatParagraph(paragraph)}</p>
	if (i === text.length - 1) {
		return <React.Fragment key={i}>
			{ currentParagraph }
				<br/>
			</React.Fragment>
	} else {
		return currentParagraph
	}
};

export const formatText = (text) => {
	if (text) {
		return text.map((paragraph, i) => {
			switch (paragraph.nodeType) {
				case 'paragraph':
					return handleParagraph(paragraph, i, text)
				case 'embedded-asset-block':
					const { url } = paragraph.data.target.fields.file;
					return <img key={i} src={url} className="articleBodyImage"/>
				default:
					return handleParagraph(paragraph, i, text)
				}
			})
		}
	}

export const formatParagraph = (paragraph) => {
	if (paragraph) {
		const formattedParagraph = paragraph.content.map((element, j) => {
			switch (element.nodeType) {
				case 'text':
					return handleTextMarks(element, j);
				case 'hyperlink':
					return <a key={j} href={element.data.uri} target="_blank">{element.content[0].value}</a>
				default: 
					return handleTextMarks(element, j);
			}
		})

		return formattedParagraph;
	}
}