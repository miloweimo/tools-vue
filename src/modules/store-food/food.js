export default class Food {
  constructor() {
    this.food = [
      { name: '司康饼', flavorList: ['甜'], linkName: '中粮香雪司康  蔓越梅司康 英式休闲早餐下午茶零食饼干司康 95g*2', link: 'https://item.jd.com/100012406512.html', picture: '//img12.360buyimg.com/n1/jfs/t1/135820/17/15541/94519/5faa4ffbE03e1c1b0/7161258cfacf95dc.jpg.avif', pictureAlt: '司康饼' },
      { name: '椰子糕', flavorList: ['甜', '软'], linkName: '春光食品  海南特产 椰子糕 200g/袋  喜糖 糖果 休闲零食', link: 'https://item.jd.com/100014031674.html', picture: '//img14.360buyimg.com/n1/jfs/t1/112632/16/11398/192556/5efd98f1E659276c4/12fc4d641e7f20a2.jpg.avif', pictureAlt: '椰子糕' },
      { name: '罗汉笋尖', flavorList: ['辣', '脆'], linkName: '来伊份山椒罗汉笋500g山珍脆竹笋尖辣味四川特产新鲜小吃蔬菜干休闲零食 500g中辣(内约11小包)', link: 'https://item.jd.com/55546624267.html', picture: '//img12.360buyimg.com/n1/jfs/t1/41881/34/13070/347214/5d63cd31E23b04a4d/f0ebc8401fa7f7f2.jpg.avif', pictureAlt: '罗汉笋尖' },
      { name: '冰皮绿豆糕', flavorList: ['甜'], linkName: '暴肌独角兽绿豆饼冰皮绿豆糕早餐速食零食小吃传统老式糕点心下午茶330g', link: 'https://item.jd.com/100032509309.html', picture: '//img14.360buyimg.com/n1/jfs/t1/202244/36/26393/64222/62f0ca9aE2dc3cd43/d542d7bb3674f70f.jpg.avif', pictureAlt: '冰皮绿豆糕' },
      { name: '康元香酥条', flavorList: ['脆', '咸'], linkName: '康元 香酥条特选手指饼干350g/袋 休闲零食下午茶早餐点心', link: 'https://item.jd.com/2293665.html', picture: '//img10.360buyimg.com/n1/jfs/t1/90857/23/25502/166379/63637339E14984129/7aa52ddb4c481135.jpg.avif', pictureAlt: '康元香酥条' },
      { name: '脆马蹄', flavorList: ['脆', '多汁', '清爽'], linkName: '百草味 冰糖脆马蹄108g/袋 果干蜜饯 零食即食特产干吃蔬菜荸荠休闲食品', link: 'https://item.jd.com/100002586718.html', picture: '//img13.360buyimg.com/n1/jfs/t1/11294/7/3292/137392/5c1cc240Ed7b17972/b547e0246177ecbc.jpg.avif', pictureAlt: '脆马蹄' },
    ];
  }

  addFood(food) {
    this.food.push(food);
  }

  getFood() {
    return this.food;
  }
}