import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import NavBar from './NavBar.vue'
import KitchenSink from './KitchenSink.vue'
import NewAuctionPage from './pages/seller/NewAuction.vue'
import AuctionSearchPage from './pages/AuctionSearch.vue'
import AuctionPage from './pages/Auction.vue'
import LiveBidPage from './pages/LiveBid.vue'
import SellerAuctionsPage from './pages/seller/Auctions.vue'
import MessagingPage from './pages/Messaging.vue'

Vue.use(VueRouter);

const routes = [
  {path:'/', component: Home},
  {path: '/kitchen-sink', component: KitchenSink},
  {path: '/auctions', component: AuctionSearchPage, name: 'auctionSearch'},
  {path: '/auction/auctionId', component: AuctionPage, name:'auction'},
  {path: '/live-bid', component: LiveBidPage, name:'liveBid'},
  {path: '/seller/auctions', component: SellerAuctionsPage},
  {path: '/seller/auctions/new', component: NewAuctionPage, name: 'newAuction'},
  {path: '/messaging', component: MessagingPage}
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  components: {
    NavBar
  }
}).$mount('#app');
