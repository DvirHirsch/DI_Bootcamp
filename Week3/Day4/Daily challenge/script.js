const text = 'The movie is not that bad, I like it';

text.includes('not') &&
text.includes('bad') &&
text === 'The movie is not that bad, I like it'
	? console.log('The movie is good, I like it')
	: console.log('The movie is not that bad, I like it');
