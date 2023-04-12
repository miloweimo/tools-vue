export default class Food {
  constructor() {
    this.food = [
      { name: '司康饼', flavorList: ['甜'], linkName: '中粮香雪司康  蔓越梅司康 英式休闲早餐下午茶零食饼干司康 95g*2', link: 'https://item.jd.com/100012406512.html', picture: '//img12.360buyimg.com/n1/jfs/t1/135820/17/15541/94519/5faa4ffbE03e1c1b0/7161258cfacf95dc.jpg.avif', pictureAlt: '司康饼' },
      { name: '椰子糕', flavorList: ['甜'], linkName: '春光食品  海南特产 椰子糕 200g/袋  喜糖 糖果 休闲零食', link: 'https://item.jd.com/100014031674.html', picture: '//img14.360buyimg.com/n1/jfs/t1/112632/16/11398/192556/5efd98f1E659276c4/12fc4d641e7f20a2.jpg.avif', pictureAlt: '椰子糕' },
    ];
  }

  addFood(food) {
    this.food.push(food);
  }

  getFood() {
    return this.food;
  }
}