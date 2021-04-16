require('express')()
	.use(require('express').static(require('path').join(__dirname, 'build')))
	.get('/*', (req, res) =>
		res.sendFile(require('path').join(__dirname, 'build', 'index.html'))
	)
	.listen(3000, () => console.log('Server up on port 8000'));
