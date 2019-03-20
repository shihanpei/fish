// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
import config from "./Config"
import tool from "./tool"
const { ccclass, property } = cc._decorator;

@ccclass
export default class Weapon extends cc.Component {

  // @property(cc.Label)
  // label: cc.Label = null;

  // @property
  // text: string = 'hello';

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.node.on("mousemove", (e: any) => {
      // 获取炮台节点路径
      let weapon = cc.find(config.weapon)
      // 炮台X坐标
      let weaponX = weapon.x
      // 炮台Y坐标
      let weaponY = weapon.y
      // 武器坐标
      let weaponPos = new cc.Vec2(weapon.x, weapon.y)
      // 武器转化成世界坐标系
      let newWeapon = this.node.convertToWorldSpaceAR(weaponPos);
      // 鼠标坐标系 
      let mousepos = new cc.Vec2(e._x, e._y)

      console.log()
      let rot = tool.getPostion(newWeapon, mousepos)
      if(!rot) return
      weapon.setRotation(rot)

    })


    // console.log(result); // 45度
  }

  // start () {

  // }

  // update (dt) {}
}
