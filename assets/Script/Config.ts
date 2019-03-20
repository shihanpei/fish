/**
 * 节点路径管理
 */
class Config {
  /**
   *  鱼的节点组
   */
  public fishGroupPath: string = "Canvas/fishgroup"
  /**
   * 武器节点
   */
  public weapon:string = "Canvas/weapon/weapon_level_7_4"

  //定义一个鱼的数组
  public fishlist: Array<any> = [
    {
      "name": "fish_denglong",
      "hp": 20,
      "gold": 10
    }
  ]

  

}

const config = new Config()

export default config