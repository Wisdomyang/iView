const index = resolve =>{
	require.ensure(['../pages/index/index'], () => {
    resolve(require('../pages/index/index'))
  })  
}

export const routes=[
	{
	    path: '/', 
	    name: 'index',
	    component: index,
	    meta: {
	      path: 'index'
	    }
	},
	{
      path: '*', 
      redirect: '/' 
    }
]
