var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    apikey: '8cb4cd3efade6172b3f005092bbecc11',
    freeword: 'タピオカ',
    prefectures:'',
    pref_code: '',
    search_text:'',
    rests: [],
  },
  methods:{
  	search:function(){
		axios.get(`https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=${this.apikey}&freeword=${this.freeword}&pref=${this.pref_code}`)
		.then(response => this.rests = response.data.rest)
  	}
  },
  mounted: function(){
  	axios.get(`https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=${this.apikey}&freeword=${this.freeword}`)
  	.then(response => {this.rests = response.data.rest})
  	axios.get(`https://api.gnavi.co.jp/master/PrefSearchAPI/v3/?keyid=${this.apikey}`)
  	      .then(response => this.prefectures = response.data.pref)
  	      .catch(response => console.log(response))
  }
})

Vue.component('shop-template',{
	props:['shop'],
	data: function(){
		return {
			name: 'なまえ',
		}
	},
	methods: {
		func: function(){
			alert('hoge');
		}
	},
	template: `
		<div>
			<p class="name">{{shop.name}}</p>
			<p class="access">{{shop.access.station}}　徒歩{{shop.access.walk}}分</p>
			<img :src="shop.image_url.shop_image1">
		</div>

	`,
})