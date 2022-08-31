// 每日一句 api https://developer.hitokoto.cn/sentence/#%E7%AE%80%E4%BB%8B
import axios from "axios";

const get = async () => {
  try {
    const data = await axios.get('https://v1.hitokoto.cn/')
    return data.status === 200 ? data.data : {error: `不是200错了 fuck! ${data}`}
  } catch(error){
    return {error: `报错了 fuck! ${data}`}
    console.log(error);
  }
}

export default { get }