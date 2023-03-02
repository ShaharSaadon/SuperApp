import HomePage from './views/HomePage.js'
import AboutUs from './views/AboutUs.js'
import NoteIndex from './apps/keep/pages/NoteIndex.js'
import EmailIndex from './apps/mail/pages/EmailIndex.js'
import EmailDetails from './apps/mail/pages/EmailDetails.js'
import EmailCompose from './apps/mail/cmps/EmailCompose.js'
import NoteEdit from './apps/keep/cmps/NoteEdit.js'

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
                    path: 'compose',
                    component: EmailCompose
                },
			]
		},
		{
			path: '/email/:emailId',
			component: EmailDetails,
		},
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
	],
}

export const router = createRouter(routerOptions)
