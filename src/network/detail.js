import {request} from './request'

export function getGoodsDetail(iid) {
    return request({
      url: '/detail',
      params: {
        iid
      }
    })
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.realPrice = itemInfo.lowNowPrice;
  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;
  }
}

export class GoodsParam {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}


export const recommend = [
    {
      "iid": "1m93p4u",
      "img": "http://s11.mogucdn.com/mlcdn/c45406/180927_5l59l9i252b2icj9lic1i4l6g2fae_640x960.jpg_320x999.jpg",
      "title": "敬酒服新娘2018新款春秋季结婚礼服红色鱼尾包臀连衣裙回门晚礼服",
      "orgPrice": "￥140.00",
      "price": "98.00",
      "cfav": 0,
    },
    {
      "iid": "1m93p1c",
      "img": "http://s11.mogucdn.com/mlcdn/c45406/180927_1ili2a8l27gjijhi22f3dc24d139j_640x900.jpg_320x999.jpg",
      "title": "2018秋季新款韩版女套装双面呢外套高腰半身短裙裤子三件套",
      "orgPrice": "￥98.58",
      "price": "69.00",
      "cfav": 0,
    },
    {
      "iid": "1m901la",
      "img": "http://s11.mogucdn.com/mlcdn/55cf19/180925_6bdiibf87e046d836dcjie5l40fk1_641x641.jpg_320x999.jpg",
      "title": "加绒加厚裤子女秋冬2018新款学生韩版宽松显瘦休闲哈伦运动卫裤秋",
      "orgPrice": "￥49.00",
      "price": "49.00",
      "cfav": "1"
    },
    {
      "iid": "1m8xdiw",
      "img": "http://s3.mogucdn.com/mlcdn/17f85e/180923_7b30c16he2lfdidb6e826kih8eaki_640x960.jpg_320x999.jpg",
      "title": "2018春秋新款韩版胖mm加肥加大码200斤刺绣字母打底衫宽松显瘦长袖t恤上衣",
      "orgPrice": "￥46.86",
      "price": "46.86",
      "cfav": "3"
    },
    {
      "iid": "1m93oze",
      "img": "http://s11.mogucdn.com/mlcdn/c45406/180927_1d2hjj34e70ag88hkb7d5ej01ac87_640x960.jpg_320x999.jpg",
      "title": "chic西装领雪纺衬衫女2018秋季新款韩版宽松长袖OL衬衣纯色打底衫上衣",
      "orgPrice": "￥85.00",
      "price": "85.00",
      "cfav": 0
    },
    {
      "iid": "1m93oq0",
      "img": "http://s3.mogucdn.com/mlcdn/c45406/180927_86i346kf7iglgea1496g13901b81k_640x960.jpg_320x999.jpg",
      "title": "钱夫人CHINSTUDIO雪梨定制网红同款2018新款柔美英伦风格子呢料西装+半裙两件套装",
      "orgPrice": "￥112.86",
      "price": "112.86",
      "cfav": 0
    },
    {
      "iid": "1m8x624",
      "img": "http://s11.mogucdn.com/mlcdn/55cf19/180923_2412gbkgfhk9dihc1d3aabb64hh1i_640x960.jpg_320x999.jpg",
      "title": "带帽运动服2018秋冬新款韩版时尚加厚刺绣金丝绒女士宽松休闲连帽运动服卫衣两件套潮",
      "orgPrice": "￥129.00",
      "price": "129.00",
      "cfav": "5"
    },
    {
      "iid": "1m8vlly",
      "img": "http://s11.mogucdn.com/mlcdn/c45406/180922_05jafg8g5k7flkj35icg400b0l4k7_800x1200.jpg_320x999.jpg",
      "title": "2018秋新款飞鹰烫金印花字母纯棉潮牌情侣小脚裤男女同款",
      "orgPrice": "￥225.72",
      "price": "158.00",
      "cfav": "13"
    },
    {
      "iid": "1m8ky96",
      "img": "http://s11.mogucdn.com/mlcdn/c45406/180915_6d523b1i35c6873a212396j3c1652_800x800.jpg_320x999.jpg",
      "title": "【两件79元】半高领打底衫女2018新款秋冬白色加绒加厚紧身长袖t恤韩版ins超火的上衣",
      "orgPrice": "￥49.00",
      "price": "49.00",
      "cfav": "85"
    },
    {
      "iid": "1m7oiw6",
      "img": "http://s11.mogucdn.com/mlcdn/c45406/180826_5708i53lg6ifcgd7402ieg99ab77b_640x640.jpg_560x999.jpg",
      "title": "裤子女阔腿裤春秋2018新款毛呢裤九分裤港味潮女裤甩腿裤女士裤子",
      "orgPrice": "￥69.90",
      "price": "69.90",
      "cfav": "134"
    },
    {
      "iid": "1m93otu",
      "img": "http://s3.mogucdn.com/mlcdn/c45406/180927_8e5b40a26d7clkhii38lg61ba5dae_640x960.jpg_560x999.jpg",
      "title": "2018秋装女新款韩版时尚套装休闲百搭高腰压褶直筒九分西裤柔软宽松暗扣连帽卫衣外套女两件套",
      "orgPrice": "￥98.58",
      "price": "69.00",
      "cfav": 0
    },
    {
      "iid": "1m93o6q",
      "img": "http://s3.mogucdn.com/mlcdn/c45406/180927_748b82859e8ldfag218dkg2i4al24_640x960.jpg_320x999.jpg",
      "title": "2018秋季新款韩版高腰宽松显瘦休闲花苞裤女学生半松紧腰阔腿九分裤百搭直筒裤女",
      "orgPrice": "￥128.00",
      "price": "89.60",
      "cfav": 0
    }
]
