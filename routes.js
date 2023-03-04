import HomePage from './views/HomePage.js'
import AboutUs from './views/AboutUs.js'
import NoteIndex from './apps/keep/pages/NoteIndex.js'
import EmailIndex from './apps/mail/pages/EmailIndex.js'
import EmailDetails from './apps/mail/cmps/EmailDetails.js'
import EmailCompose from './apps/mail/cmps/EmailCompose.js'
import NoteEdit from './apps/keep/cmps/NoteEdit.js'
import BookIndex from './apps/books/pages/BookIndex.js'
import BookDetails from './apps/books/pages/BookDetails.js'
import BookEdit from './apps/books/pages/BookEdit.js'
import BookAdd from './apps/books/cmps/BookAdd.js'
import EmailList from './apps/mail/cmps/EmailList.js'

const { createRouter, createWebHashHistory } = VueRouter

const routerOptions = {
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			component: HomePage,
		},
		{
			path: '/about',
			component: AboutUs,
		},
		{
			path: '/email',
			component: EmailIndex,
			children: [
				{
					path: ':emailId',
					component: EmailDetails
				},
				{
					path: 'inbox',
					component: EmailList,
					children: [
						{
							path: 'compose',
							component: EmailCompose
						}
					]					
				}
			]
		},
		// {
		// 	path: '/email/:emailId',
		// 	component: EmailDetails,
		// },
		{
			path: '/notes',
			component: NoteIndex,
			children:[
				{
					path:"/notes/editor/:noteId",
					component: NoteEdit
				}
			]
		},
		{
			path: '/books',
			component: BookIndex,
		},
		{
            path: '/books/:bookId',
            component: BookDetails
        },
        {
            path: '/books/edit/:bookId?',
            component: BookEdit
        },
        {
            path: '/add',
            component: BookAdd
        },
	],
}

export const router = createRouter(routerOptions)
