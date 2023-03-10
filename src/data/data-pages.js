// data > data-pages -- Al data for the pages

export const dataPages = [
  {
    name: 'Home',
    slug: "/",
    h1: 'My small cars collection',
    metadata:{
      pageTitle: '🚗 Tiny Fords - Ford Die-Cast Car Collection',
      description: 'Keep track of our Ford die-cast car collection with Tiny Fords. Browse our Hot Wheels, Matchbox and other car models easily.'
    },
    status: 200,
    template: 'home',
    active: true,
    mainNav:true,
    footer:true,
    xmlSitemap: true,
    breadcrumbList: ['Home'],
    breadcrumbs: [],
    socialMedia: {
      title: '🚗 Ford Die-Cast Collection at Tiny Fords',
      description: `Drive into the world of Ford die-cast cars with Tiny Fords! Hot Wheels, Matchbox and more, all in one place.`,
      imageName: 'social-media-home'
    }
  },
  {
    name: 'Hot Wheels',
    slug: '/hotwheels',
    h1: 'HotWheels collection',
    metadata:{
      pageTitle: '🔥 Hot Wheels Collection - Tiny Fords',
      description: 'Discover our Hot Wheels collection at Tiny Fords. Find your favorite Ford die-cast cars with our easy-to-use Hot Wheels collection.'
    },
    status: 200,
    template: 'collection',
    active: true,
    mainNav:true,
    xmlSitemap: true,
    footer:true,
    breadcrumbList: ['Home', 'All', 'Hot Wheels'],
    breadcrumbs: [],
    attributes:[
      {
        key: 'name',
        name: 'Name',
      },{
        key: 'make',
        name: 'Make',
      },{
        key: 'code',
        name: 'Code',
      },{
        key: 'base',
        name: 'Base',
      },{
        key: 'added',
        name: 'Added',
      }
    ],
    socialMedia: {
      title: '🔥 Hot Wheels: Check Out Our Collection!',
      description: `Get revved up for our collection of sweet Hot Wheels die-cast cars!`,
      imageName: 'social-media-hot-wheels'
    },
  },
  {
    name: 'Matchbox',
    slug: '/matchbox',
    h1: 'Matchbox collection',
    metadata:{
      pageTitle: '🚗 Matchbox Collection - Tiny Fords',
      description: 'Browse our Matchbox collection at Tiny Fords. Find your favorite Ford die-cast cars with our easy-to-use Matchbox collection.'
    },
    status: 200,
    template: 'collection',
    active: true,
    mainNav:true,
    xmlSitemap: true,
    footer:true,
    breadcrumbList: ['Home', 'All', 'Matchbox'],
    breadcrumbs: [],
    attributes:[
      {
        key: 'name',
        name: 'Name',
      },{
        key: 'make',
        name: 'Make',
      },{
        key: 'code',
        name: 'Code',
      },{
        key: 'base',
        name: 'Base',
      },{
        key: 'added',
        name: 'Added',
      }
    ],
    socialMedia: {
      title: '🚗 Matchbox Mania: See Our Collection Now!',
      description: `Roll into the world of Matchbox die-cast cars with our collection!`,
      imageName: 'social-media-matchbox'
    }
  },
  {
    name: 'Other',
    slug: '/other',
    h1: 'Others collection',
    metadata:{
      pageTitle: '🏎️ Other Die-Cast Cars - Tiny Fords',
      description: 'Check out our other die-cast cars collection at Tiny Fords. Find Ford and other brands die-cast cars in our easy-to-use collection'
    },
    status: 200,
    template: 'collection',
    active: true,
    mainNav:true,
    xmlSitemap: true,
    footer:true,
    breadcrumbList: ['Home', 'All', 'Other'],
    breadcrumbs: [],
    attributes:[
      {
        key: 'name',
        name: 'Name',
      },{
        key: 'make',
        name: 'Make',
      },{
        key: 'code',
        name: 'Code',
      },{
        key: 'added',
        name: 'Added',
      },{
        key: 'brand',
        name: 'Brand'
      },
    ],
    socialMedia: {
      title: '🚗 Non-Hot Wheels & Matchbox: View Our Unique Rides',
      description: `Discover rare and unique die-cast cars that aren't Hot Wheels or Matchbox.`,
      imageName: 'social-media-other',
    }
  },
  {
    name: 'Duplicates',
    slug: '/duplicates',
    h1: 'Duplicates',
    metadata:{
      pageTitle: '🔁 Duplicate Cars - Tiny Fords',
      description: 'View our duplicate cars collection at Tiny Fords. Find the cars we have duplicates of and contact us to buy or swap.'
    },
    status: 200,
    template: 'collection',
    active: false,
    mainNav:false,
    xmlSitemap: false,
    footer:false,
    breadcrumbList: ['Home', 'All', 'Duplicates'],
    breadcrumbs: [],
    socialMedia: {
      title: '🔁 Trade or Buy: Check Out Our Duplicate Collection',
      description: `Don't miss out on the chance to upgrade your collection with our duplicate die-cast cars for trade or sale.`,
      imageName: 'social-media-duplicates'
    }
  },
  {
    name: 'All',
    slug: '/all',
    h1: 'All items',
    metadata:{
      pageTitle: 'Complete Collection: Hot Wheels and Matchbox Cars at Tiny Fords',
      description: 'Discover our full collection at Tiny Fords. Find your favorite Ford die-cast cars with our easy-to-use Hot Wheels collection.'
    },
    status: 200,
    template: 'collection',
    active: true,
    mainNav:false,
    xmlSitemap: true,
    footer:true,
    breadcrumbList: ['Home', 'All'],
    breadcrumbs: [],
    socialMedia: {
      title: '🚗 Our Ultimate Die-Cast Destination: Tiny Fords',
      description: `Browse every car in our die-cast collection at Tiny Fords.`,
      imageName: 'social-media-all'
    }
  },
  {
    name: 'Contact',
    slug: '/about/contact',
    h1: 'Contact',
    metadata:{
      pageTitle: '📞 Contact Tiny Fords - Ford Die-Cast Car Collection',
      description: 'Get in touch with Tiny Fords and our Ford die-cast car collection. Contact us for any inquiries or feedback.'
    },
    status: 200,
    template: 'content',
    active: false,
    mainNav:false,
    xmlSitemap: false,
    footer:false,
    breadcrumbList: ['Home', 'About', 'Contact'],
    breadcrumbs: [],
    socialMedia: {
      title: '📞 Get in Touch with Tiny Fords',
      description: `Reach out to us through our contact page, we'd love to hear from you!`,
      imageName: 'social-media-about-contact'
    }
  },
  {
    name: 'How to find the toy number',
    slug: '/about/how-to-find-toy-number',
    h1: 'How to find the toy number',
    metadata:{
      pageTitle: '🔍 How to find the toy number of a car - Tiny Fords',
      description: 'Discover how to find the toy number of a car at Tiny Fords. Learn how to navigate our collection and find the cars you are looking for.'
    },
    status: 200,
    template: 'toy-number',
    active: true,
    mainNav:false,
    xmlSitemap: false,
    footer:true,
    breadcrumbList: ['Home', 'About', 'How to find the toy number'],
    breadcrumbs: [],
    socialMedia: {
      title: '🔍 Find Your Favorite Cars in a Snap',
      description: `Quickly find the die-cast cars you love (and in our collection) with our easy search tips.`,
      imageName: 'social-media-about-codes'
    }
  },
  {
    name: 'About',
    slug: '/about',
    h1: 'About',
    metadata:{
      pageTitle: '🚗 About Tiny Fords - Ford Die-Cast Car Collection',
      description: 'Learn more about Tiny Fords and our Ford die-cast car collection. Find out how we keep track of our collection and avoid buying duplicates.'
    },
    status: 200,
    template: 'about',
    active: true,
    mainNav:true,
    xmlSitemap: true,
    footer:true,
    breadcrumbList: ['Home', 'About'],
    breadcrumbs: [],
    socialMedia: {
      title: '🚗 Tiny Fords: The Story Behind Our Die-Cast Obsession',
      description: `Learn the story behind why we created Tiny Fords and our die-cast car collection.`,
      imageName: 'social-media-about'
    }
  },
  {
    name: 'Offline',
    slug: '/offline',
    h1: 'Offline',
    metadata:{
      pageTitle: 'Page is not available - Offline browsing - Tiny Fords',
    },
    status: 200,
    template: 'offline',
    active: true,
    mainNav:false,
    xmlSitemap: false,
    footer:false,
    breadcrumbList: ['Home'],
    breadcrumbs: [],
  },
];


export const notFound = {
  name: 'Page not found! :(',
  h1: 'Not found :(',
  metadata:{ 
    pageTitle: '404 - Page not found - Tiny Fords',
  },
  status: 404,
  template: 404
}