�������һǩ���ű�

����ʱ��: 2021.06.17 23:20 v2.0.5
��Ч�ӿ�: 30+
�ű�����: QuantumultX, Surge, Loon, JSBox, Node.js
�籨Ƶ��: @NobyDa 
���ⷴ��: @NobyDa_bot 
���ת��: ��ע������

*************************
�� JSbox, Node.js ˵�� �� :
*************************

����ץ��app��, Safari�������¼ https://bean.m.jd.com/bean/signIndex.action ���ǩ�����ҳ���ǩ��������, ����ץ��app�����ؼ��� functionId=signBean ��������ͷCookie��������Key���ĵ������ڼ��� */

var Key = ''; //��������������д��ץȡ��Cookie

var DualKey = ''; //����˫�˺�ǩ��,�˴�����������дץȡ��"�˺�2"Cookie, ����������д

var OtherKey = ''; //�����˺Ż����ϵ�Cookie json������, ��������Ϊ���������˺ţ�var OtherKey = '[{"cookie":"pt_key=xxxxxx;pt_pin=yyyyyy"},{"cookie":"pt_key=xxxxxx;pt_pin=yyyyyy"}]'

/* ע1: ����ѡ��������JsBox��Node.js, ���ʹ��QX,Surge,Loon, ��ʹ�ýű���ȡCookie.
   ע2: ˫�˺��û�ץȡ"�˺�1"Cookie��, �������˳��˺�(���ܻᵼ��CookieʧЧ), �������������ϻ�����������¼"�˺�2"ץȡ.
   ע3: ������Ƶ�Cookie��ͷΪ"Cookie: "�����ɾ��������.
   ע4: ���ʹ��QX,Surge,Loon����ȡCookie��, ���ظ���д����ѡ��, ��ǩ�����ȶ�ȡ����Cookie.
   ע5: ���ʹ��Node.js, �����а�װ'request'ģ��. ��: npm install request -g
   ע6: Node.js��JSbox���������������ݳ־û�, ��дCookie����һ�κ�, �������½ű������ٴ���д, ��CookieʧЧ������ץȡ��д����.

*************************
�� QX, Surge, Loon ˵�� �� :
*************************

����ʹ��ʱ, app�����ļ���ӽű�����,������Mitm��, Safari������򿪵�¼ https://bean.m.jd.com/bean/signIndex.action ,���ǩ�����ҳ���ǩ��������, ���֪ͨ���cookie�ɹ�, �����ʹ�ô�ǩ���ű��� ע: �����ھ���APP�ڻ�ȡ!!!

����cookie����Ч��(��������ҳCookie��Ч�����31��)������ű���������cookie��Ч��֪ͨ������Ҫ�ظ��������衣 
ǩ���ű�����ÿ����賿0:05ִ��, �������޸�ִ��ʱ�䡣 �򲿷ֽӿھ���������ȡ, �������Ϊ�賿ǩ����

BoxJs��QX Gallery���ĵ�ַ: https://raw.githubusercontent.com/NobyDa/Script/master/NobyDa_BoxJs.json

*************************
�� ���öྩ���˺�ǩ��˵�� �� : 
*************************

��ȷ����QX��Surge��Loon��, ��ʹ�ô˽ű���ȡ"�˺�1"Cookie�ɹ���, �������˳��˺�(���ܻᵼ��CookieʧЧ), �������������ϻ�����������¼"�˺�2"��ȡ����; �˺�3������ͬ��.
ע: �����������Cookie, ���ɿ����ű���"DeleteCookie"ѡ�� (��96��)

*************************
��Surge 4.2+ �ű����á�:
*************************

[Script]
�������һǩ�� = type=cron,cronexp=5 0 * * *,wake-system=1,timeout=60,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js

��ȡ����Cookie = type=http-request,pattern=https:\/\/api\.m\.jd\.com\/client\.action.*functionId=signBean,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js

[MITM]
hostname = api.m.jd.com

*************************
��Loon 2.1+ �ű����á�:
*************************

[Script]
cron "5 0 * * *" tag=�������һǩ��, script-path=https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js

http-request https:\/\/api\.m\.jd\.com\/client\.action.*functionId=signBean tag=��ȡ����Cookie, script-path=https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js

[MITM]
hostname = api.m.jd.com

*************************
�� QX 1.0.10+ �ű����� �� :
*************************

[task_local]
# �������һǩ��
# ע���ΪԶ��·��, �Ͱ汾�û������е���Ϊ����·��.
5 0 * * * https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js, tag=�������һǩ��, img-url=https://raw.githubusercontent.com/NobyDa/mini/master/Color/jd.png,enabled=true

[rewrite_local]
# ��ȡ����Cookie. 
# ע���ΪԶ��·��, �Ͱ汾�û������е���Ϊ����·��.
https:\/\/api\.m\.jd\.com\/client\.action.*functionId=signBean url script-request-header https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js

[mitm]
hostname = api.m.jd.com

*************************/

var LogDetails = false; //�Ƿ�����Ӧ��־, true����

var stop = '1000'; //�Զ����ӳ�ǩ��, ��λ����. Ĭ�Ϸ����������ӳ�; �ò������������ָ���ӳ�(��: '2000'���ʾ�ӳ�2��; '2000-5000'���ʾ�ӳ���С2��,���5���ڵ�����ӳ�), �������ӳ����л�˳��ǩ��(��ʱ�ϳ�), Surge�û���ע����SurgeUI��������ű���ʱ; ע: �ò���Node.js��JSbox���������������ݳ־û�, ����(var stop = '')�������.

var DeleteCookie = false; //�Ƿ��������Cookie, true����.

var boxdis = true; //�Ƿ����Զ�����, false��ر�. �ű����б���ʱ(��VPN����), �´�����ʱ���Զ�������ر����ӿ�(�����ֽӿ�����), ����ʱ���ܻ�����������ӿ�. (��ѡ���������QX,Surge,Loon)

var ReDis = false; //�Ƿ��Ƴ����н����б�, true����. �����ڴ����Զ����ú�, ��Ҫ�ٴ����ýӿڵ����. (��ѡ���������QX,Surge,Loon)

var out = 0; //�ӿڳ�ʱ�˳�, ���ڿ��ܷ��������粻�ȶ�, 0��ر�. ��QX��־���ִ���"JS Context timeout"��ű��ж�ʱ, ������д6000

var $nobyda = nobyda();

async function all() {
  merge = {};
  switch (stop) {
    case 0:
      await Promise.all([
        JingDongBean(stop), //��������
        JingDongStore(stop), //��������
        JingRongSteel(stop), //���ڸ��G
        JingDongTurn(stop), //����ת��
        JDFlashSale(stop), //��������
        JingDongCash(stop), //�����ֽ���
        JDMagicCube(stop, 2), //����Сħ��
        JingDongSubsidy(stop), //��������
        JingDongGetCash(stop), //�������ֽ�
        JingDongShake(stop), //����ҡһҡ
        JDSecKilling(stop), //������ɱ
        JingDongBuyCar(stop, '435c9611622e4135b436b9d73351be10'), //��������
        // JingRongDoll(stop, 'JRDoll', '��������-ǩҼ', '4D25A6F482'),
        // JingRongDoll(stop, 'JRThreeDoll', '��������-ǩ��', '69F5EC743C'),
        JingRongDoll(stop, 'JRFourDoll', '��������-ǩ��', '30C4F86264'),
        // JingRongDoll(stop, 'JRFiveDoll', '��������-ǩ��', '1D06AA3B0F')
      ]);
      await Promise.all([
        JDUserSignPre(stop, 'JDUndies', '�����̳�-����', '4PgpL1xqPSW1sVXCJ3xopDbB1f69'), //�������¹�
        JDUserSignPre(stop, 'JDCard', '�����̳�-����', '7e5fRnma6RBATV9wNrGXJwihzcD'), //��������
        // JDUserSignPre(stop, 'JDCustomized', '�����̳�-����', '2BJK5RBdvc3hdddZDS1Svd5Esj3R'), //��������
        JDUserSignPre(stop, 'JDaccompany', '�����̳�-���', 'kPM3Xedz1PBiGQjY4ZYGmeVvrts'), //�������
        JDUserSignPre(stop, 'JDShoes', '�����̳�-Ьѥ', '4RXyb1W4Y986LJW8ToqMK14BdTD'), //����Ьѥ
        JDUserSignPre(stop, 'JDChild', '�����̳�-ͯװ', '3Af6mZNcf5m795T8dtDVfDwWVNhJ'), //����ͯװ��
        JDUserSignPre(stop, 'JDBaby', '�����̳�-ĸӤ', '3BbAVGQPDd6vTyHYjmAutXrKAos6'), //����ĸӤ��
        JDUserSignPre(stop, 'JD3C', '�����̳�-����', '4SWjnZSCTHPYjE5T7j35rxxuMTb6'), //�������������
        JDUserSignPre(stop, 'JDWomen', '�����̳�-Ůװ', 'DpSh7ma8JV7QAxSE2gJNro8Q2h9'), //����Ůװ��
        JDUserSignPre(stop, 'JDBook', '�����̳�-ͼ��', '3SC6rw5iBg66qrXPGmZMqFDwcyXi'), //����ͼ��
        JDUserSignPre(stop,'JDJiaDian','�����̳�-С�ҵ��','3uvPyw1pwHARGgndatCXddLNUxHw'), // ����С�ҵ�
        JingRongDoll(stop, 'JTDouble', '��������-˫ǩ', '1DF13833F7'), //�������� ����˫ǩ
        // JingRongDoll(stop, 'XJDouble', '�����ֽ�-˫ǩ', 'F68B2C3E71', '', '', '', 'xianjin') //�������� �ֽ�˫ǩ
      ]);
      await Promise.all([
        JDUserSignPre(stop, 'JDEsports', '�����̳�-�羺', 'CHdHQhA5AYDXXQN9FLt3QUAPRsB'), //�����羺
        JDUserSignPre(stop, 'JDClothing', '�����̳�-����', '4RBT3H9jmgYg1k2kBnHF8NAHm7m8'), //��������
        JDUserSignPre(stop, 'JDSuitcase', '�����̳�-���', 'ZrH7gGAcEkY2gH8wXqyAPoQgk6t'), //���������
        JDUserSignPre(stop, 'JDSchool', '�����̳�-У԰', '2QUxWHx5BSCNtnBDjtt5gZTq7zdZ'), //����У԰
        JDUserSignPre(stop, 'JDHealth', '�����̳�-����', 'w2oeK5yLdHqHvwef7SMMy4PL8LF'), //��������
        JDUserSignPre(stop, 'JDShand', '��������-����', '3S28janPLYmtFxypu37AYAGgivfp'), //�������Ķ���
        JDUserSignPre(stop, 'JDClean', '�����̳�-���', '2Tjm6ay1ZbZ3v7UbriTj6kHy9dn6'), //��������
        JDUserSignPre(stop, 'JDCare', '�����̳�-����', '2tZssTgnQsiUqhmg5ooLSHY9XSeN'), //�������˻����
        // JDUserSignPre(stop, 'JDJewels', '�����̳�-�鱦', 'zHUHpTHNTaztSRfNBFNVZscyFZU'), //�����鱦��
        // JDUserSignPre(stop, 'JDMakeup', '�����̳�-��ױ', '2smCxzLNuam5L14zNJHYu43ovbAP'), //������ױ��
        JDUserSignPre(stop, 'JDVege', '�����̳�-�˳�', 'Wcu2LVCFMkBP3HraRvb7pgSpt64'), //�����˳�
        // JDUserSignPre(stop, 'JDLive', '��������-����', 'KcfFqWvhb5hHtaQkS4SD1UU6RcQ') //������������
      ]);
      await JingRongDoll(stop, 'JDDouble', '���ھ���-˫ǩ', 'F68B2C3E71', '', '', '', 'jingdou'); //�������� ����˫ǩ
      break;
    default:
      await JingDongBean(0); //��������
      await JingDongStore(Wait(stop)); //��������
      await JingRongSteel(Wait(stop)); //���ڸ��G
      await JingDongTurn(Wait(stop)); //����ת��
      await JDFlashSale(Wait(stop)); //��������
      await JingDongCash(Wait(stop)); //�����ֽ���
      await JDMagicCube(Wait(stop), 2); //����Сħ��
      await JingDongGetCash(Wait(stop)); //�������ֽ�
      await JingDongSubsidy(Wait(stop)); //��������
      await JingDongShake(Wait(stop)); //����ҡһҡ
      await JDSecKilling(Wait(stop)); //������ɱ
      await JingDongBuyCar(Wait(stop), '435c9611622e4135b436b9d73351be10'); //��������
      // await JingRongDoll(Wait(stop), 'JRThreeDoll', '��������-ǩ��', '69F5EC743C');
      await JingRongDoll(Wait(stop), 'JRFourDoll', '��������-ǩ��', '30C4F86264');
      // await JingRongDoll(Wait(stop), 'JRFiveDoll', '��������-ǩ��', '1D06AA3B0F');
      // await JingRongDoll(Wait(stop), 'JRDoll', '��������-ǩҼ', '4D25A6F482');
      // await JingRongDoll(Wait(stop), 'XJDouble', '�����ֽ�-˫ǩ', 'F68B2C3E71', '', '', '', 'xianjin'); //�������� �ֽ�˫ǩ
      await JingRongDoll(Wait(stop), 'JTDouble', '��������-˫ǩ', '1DF13833F7'); //�������� ����˫ǩ
      await JDUserSignPre(Wait(stop), 'JDCard', '�����̳�-����', '7e5fRnma6RBATV9wNrGXJwihzcD'); //��������
      await JDUserSignPre(Wait(stop), 'JDUndies', '�����̳�-����', '4PgpL1xqPSW1sVXCJ3xopDbB1f69'); //�������¹�
      await JDUserSignPre(Wait(stop), 'JDEsports', '�����̳�-�羺', 'CHdHQhA5AYDXXQN9FLt3QUAPRsB'); //�����羺
      // await JDUserSignPre(Wait(stop), 'JDCustomized', '�����̳�-����', '2BJK5RBdvc3hdddZDS1Svd5Esj3R'); //��������
      await JDUserSignPre(Wait(stop), 'JDSuitcase', '�����̳�-���', 'ZrH7gGAcEkY2gH8wXqyAPoQgk6t'); //���������
      await JDUserSignPre(Wait(stop), 'JDClothing', '�����̳�-����', '4RBT3H9jmgYg1k2kBnHF8NAHm7m8'); //��������
      await JDUserSignPre(Wait(stop), 'JDSchool', '�����̳�-У԰', '2QUxWHx5BSCNtnBDjtt5gZTq7zdZ'); //����У԰ 
      await JDUserSignPre(Wait(stop), 'JDHealth', '�����̳�-����', 'w2oeK5yLdHqHvwef7SMMy4PL8LF'); //��������
      await JDUserSignPre(Wait(stop), 'JDShoes', '�����̳�-Ьѥ', '4RXyb1W4Y986LJW8ToqMK14BdTD'); //����Ьѥ
      await JDUserSignPre(Wait(stop), 'JDChild', '�����̳�-ͯװ', '3Af6mZNcf5m795T8dtDVfDwWVNhJ'); //����ͯװ��
      await JDUserSignPre(Wait(stop), 'JDBaby', '�����̳�-ĸӤ', '3BbAVGQPDd6vTyHYjmAutXrKAos6'); //����ĸӤ��
      await JDUserSignPre(Wait(stop), 'JD3C', '�����̳�-����', '4SWjnZSCTHPYjE5T7j35rxxuMTb6'); //�������������
      await JDUserSignPre(Wait(stop), 'JDWomen', '�����̳�-Ůװ', 'DpSh7ma8JV7QAxSE2gJNro8Q2h9'); //����Ůװ��
      await JDUserSignPre(Wait(stop), 'JDBook', '�����̳�-ͼ��', '3SC6rw5iBg66qrXPGmZMqFDwcyXi'); //����ͼ��
      await JDUserSignPre(Wait(stop), 'JDShand', '��������-����', '3S28janPLYmtFxypu37AYAGgivfp'); //�������Ķ���
      // await JDUserSignPre(Wait(stop), 'JDMakeup', '�����̳�-��ױ', '2smCxzLNuam5L14zNJHYu43ovbAP'); //������ױ��
      await JDUserSignPre(Wait(stop), 'JDVege', '�����̳�-�˳�', 'Wcu2LVCFMkBP3HraRvb7pgSpt64'); //�����˳�
      await JDUserSignPre(Wait(stop), 'JDaccompany', '�����̳�-���', 'kPM3Xedz1PBiGQjY4ZYGmeVvrts'); //�������
      // await JDUserSignPre(Wait(stop), 'JDLive', '��������-����', 'KcfFqWvhb5hHtaQkS4SD1UU6RcQ'); //������������
      await JDUserSignPre(Wait(stop), 'JDClean', '�����̳�-���', '2Tjm6ay1ZbZ3v7UbriTj6kHy9dn6'); //��������
      await JDUserSignPre(Wait(stop), 'JDCare', '�����̳�-����', '2tZssTgnQsiUqhmg5ooLSHY9XSeN'); //�������˻����
      await JDUserSignPre(Wait(stop), 'JDJiaDian','�����̳�-С�ҵ��','3uvPyw1pwHARGgndatCXddLNUxHw'); // ����С�ҵ��
      // await JDUserSignPre(Wait(stop), 'JDJewels', '�����̳�-�鱦', 'zHUHpTHNTaztSRfNBFNVZscyFZU'); //�����鱦��
      await JingRongDoll(Wait(stop), 'JDDouble', '���ھ���-˫ǩ', 'F68B2C3E71', '', '', '', 'jingdou'); //�������� ����˫ǩ
      break;
  }
  await Promise.all([
    TotalSteel(), //�ܸ��G��ѯ
    TotalCash(), //�ܺ����ѯ
    TotalBean(), //�ܾ�����ѯ
    TotalSubsidy(), //�ܽ�����ѯ
    TotalMoney() //���ֽ��ѯ
  ]);
  await notify(); //֪ͨģ��
}

function notify() {
  return new Promise(resolve => {
    try {
      var bean = 0;
      var steel = 0;
      var cash = 0;
      var money = 0;
      var subsidy = 0;
      var success = 0;
      var fail = 0;
      var err = 0;
      var notify = '';
      for (var i in merge) {
        bean += merge[i].bean ? Number(merge[i].bean) : 0
        steel += merge[i].steel ? Number(merge[i].steel) : 0
        cash += merge[i].Cash ? Number(merge[i].Cash) : 0
        money += merge[i].Money ? Number(merge[i].Money) : 0
        subsidy += merge[i].subsidy ? Number(merge[i].subsidy) : 0
        success += merge[i].success ? Number(merge[i].success) : 0
        fail += merge[i].fail ? Number(merge[i].fail) : 0
        err += merge[i].error ? Number(merge[i].error) : 0
        notify += merge[i].notify ? "\n" + merge[i].notify : ""
      }
      var Cash = merge.TotalCash && merge.TotalCash.TCash ? `${merge.TotalCash.TCash}���` : ""
      var Steel = merge.TotalSteel && merge.TotalSteel.TSteel ? `${merge.TotalSteel.TSteel}���G` : ``
      var beans = merge.TotalBean && merge.TotalBean.Qbear ? `${merge.TotalBean.Qbear}����${Steel?`, `:``}` : ""
      var Money = merge.TotalMoney && merge.TotalMoney.TMoney ? `${merge.TotalMoney.TMoney}�ֽ�${Cash?`, `:``}` : ""
      var Subsidy = merge.TotalSubsidy && merge.TotalSubsidy.TSubsidy ? `${merge.TotalSubsidy.TSubsidy}����${Money||Cash?", ":""}` : ""
      var Tbean = bean ? `${bean.toFixed(0)}����${steel?", ":""}` : ""
      var TSteel = steel ? `${steel.toFixed(2)}���G` : ""
      var TCash = cash ? `${cash.toFixed(2)}���${subsidy||money?", ":""}` : ""
      var TSubsidy = subsidy ? `${subsidy.toFixed(2)}����${money?", ":""}` : ""
      var TMoney = money ? `${money.toFixed(2)}�ֽ�` : ""
      var Ts = success ? `�ɹ�${success}��${fail||err?`, `:``}` : ``
      var Tf = fail ? `ʧ��${fail}��${err?`, `:``}` : ``
      var Te = err ? `����${err}��` : ``
      var one = `��ǩ��������:  ${Ts+Tf+Te}${Ts||Tf||Te?`\n`:`��ȡʧ��\n`}`
      var two = Tbean || TSteel ? `��ǩ��������:  ${Tbean+TSteel}\n` : ``
      var three = TCash || TSubsidy || TMoney ? `������������:  ${TCash+TSubsidy+TMoney}\n` : ``
      var four = `���˺��ܼơ�:  ${beans+Steel}${beans||Steel?`\n`:`��ȡʧ��\n`}`
      var five = `�������ܼơ�:  ${Subsidy+Money+Cash}${Subsidy||Money||Cash?`\n`:`��ȡʧ��\n`}`
      var DName = merge.TotalBean && merge.TotalBean.nickname ? merge.TotalBean.nickname : "��ȡʧ��"
      var cnNum = ["��", "һ", "��", "��", "��", "��", "��", "��", "��", "��", "ʮ"];
      const numFix = !Key && !DualKey ? DualAccount - 2 : Key && DualKey ? DualAccount : DualAccount - 1 || DualAccount
      const Name = DualKey || OtherKey ? `��ǩ����${cnNum[numFix]||numFix}��:  ${DName}\n` : ``
      const disables = $nobyda.read("JD_DailyBonusDisables")
      const amount = disables ? disables.split(",").length : 0
      const disa = !notify || amount ? `����ܰ��ʾ��:  ��⵽${$nobyda.disable?`�ϴ�ִ���������, `:``}�ѽ���${notify?`${amount}��`:`����`}�ӿ�, ���迪����ǰ��BoxJs��鿴�ű��ڵ�100��ע��.\n` : ``
      $nobyda.notify("", "", Name + one + two + three + four + five + disa + notify, {
        'media-url': $nobyda.headUrl || 'https://cdn.jsdelivr.net/gh/NobyDa/mini@master/Color/jd.png'
      });
      $nobyda.headUrl = null;
      if ($nobyda.isJSBox) {
        Shortcut = (typeof(Shortcut) == 'undefined' ? '' : Shortcut) + Name + one + two + three + four + five + "\n"
      }
      double();
    } catch (eor) {
      $nobyda.notify("֪ͨģ�� " + eor.name + "??", JSON.stringify(eor), eor.message)
    } finally {
      resolve()
    }
  });
}

function ReadCookie() {
  DualAccount = 1;
  const EnvInfo = $nobyda.isJSBox ? "JD_Cookie" : "CookieJD"
  const EnvInfo2 = $nobyda.isJSBox ? "JD_Cookie2" : "CookieJD2"
  const EnvInfo3 = $nobyda.isJSBox ? "JD_Cookies" : "CookiesJD"
  if (DeleteCookie) {
    if ($nobyda.read(EnvInfo) || $nobyda.read(EnvInfo2) || ($nobyda.read(EnvInfo3) || '[]') != '[]') {
      $nobyda.write("", EnvInfo)
      $nobyda.write("", EnvInfo2)
      $nobyda.write("", EnvInfo3)
      $nobyda.notify("����Cookie����ɹ� !", "", '���ֶ��رսű���"DeleteCookie"ѡ��')
      $nobyda.done()
      return
    }
    $nobyda.notify("�ű���ֹ", "", 'δ�رսű���"DeleteCookie"ѡ�� ??')
    $nobyda.done()
    return
  } else if ($nobyda.isRequest) {
    GetCookie()
    return
  }
  Key = Key || $nobyda.read(EnvInfo)
  DualKey = DualKey || $nobyda.read(EnvInfo2)
  OtherKey = OtherKey || $nobyda.read(EnvInfo3)
  KEY = Key || DualKey
  if (KEY || OtherKey) {
    if ($nobyda.isJSBox || $nobyda.isNode) {
      if (Key) $nobyda.write(Key, EnvInfo);
      if (DualKey) $nobyda.write(DualKey, EnvInfo2);
      if (OtherKey) $nobyda.write(OtherKey, EnvInfo3);
      if (stop !== '0') $nobyda.write(stop, "JD_DailyBonusDelay");
    }
    out = parseInt($nobyda.read("JD_DailyBonusTimeOut")) || out
    stop = Wait($nobyda.read("JD_DailyBonusDelay"), true) || Wait(stop, true)
    boxdis = $nobyda.read("JD_Crash_disable") === "false" || $nobyda.isNode || $nobyda.isJSBox ? false : boxdis
    LogDetails = $nobyda.read("JD_DailyBonusLog") === "true" || LogDetails
    ReDis = ReDis ? $nobyda.write("", "JD_DailyBonusDisables") : ""
    if (KEY) {
      all()
    } else {
      double()
    }
  } else {
    $nobyda.notify("����ǩ��", "", "�ű���ֹ, δ��ȡCookie ??")
    $nobyda.done()
  }
}

function double() {
  KEY = '';
  if (DualAccount == 1) {
    DualAccount++;
    KEY = Key ? DualKey : ''
  }
  if (!KEY && OtherKey) {
    DualAccount++;
    let cks = [];
    try {
      cks = JSON.parse(OtherKey);
    } catch (e) {
      cks = [];
      console.log(`\n�����������˺�Cookie��ȡʧ��, ����Json��ʽ.`)
    }
    if (cks.length + 2 >= DualAccount) {
      KEY = cks[DualAccount - 3].cookie;
    }
  }
  if (KEY) {
    all()
  } else {
    if ($nobyda.isJSBox) {
      $intents.finish(Shortcut)
    }
    $nobyda.time();
    $nobyda.done();
  }
}

function JingDongBean(s) {
  merge.JDBean = {};
  return new Promise(resolve => {
    if (disable("JDBean")) return resolve()
    setTimeout(() => {
      const JDBUrl = {
        url: 'https://api.m.jd.com/client.action',
        headers: {
          Cookie: KEY
        },
        body: 'functionId=signBeanIndex&appid=ld'
      };
      $nobyda.post(JDBUrl, function(error, response, data) {
        try {
          if (error) {
            throw new Error(error)
          } else {
            const cc = JSON.parse(data)
            const Details = LogDetails ? "response:\n" + data : '';
            if (cc.code == 3) {
              console.log("\n" + "�����̳�-����CookieʧЧ " + Details)
              merge.JDBean.notify = "�����̳�-����: ʧ��, ԭ��: CookieʧЧ??"
              merge.JDBean.fail = 1
            } else if (data.match(/��ת��ƴͼ/)) {
              merge.JDBean.notify = "�����̳�-����: ʧ��, ��Ҫƴͼ��֤ ??"
              merge.JDBean.fail = 1
            } else if (data.match(/\"status\":\"?1\"?/)) {
              console.log("\n" + "�����̳�-����ǩ���ɹ� " + Details)
              if (data.match(/dailyAward/)) {
                merge.JDBean.notify = "�����̳�-����: �ɹ�, ��ϸ: " + cc.data.dailyAward.beanAward.beanCount + "���� ??"
                merge.JDBean.bean = cc.data.dailyAward.beanAward.beanCount
              } else if (data.match(/continuityAward/)) {
                merge.JDBean.notify = "�����̳�-����: �ɹ�, ��ϸ: " + cc.data.continuityAward.beanAward.beanCount + "���� ??"
                merge.JDBean.bean = cc.data.continuityAward.beanAward.beanCount
              } else if (data.match(/����ǩ��/)) {
                const quantity = data.match(/beanCount\":\"(\d+)\".+����/)
                merge.JDBean.bean = quantity ? quantity[1] : 0
                merge.JDBean.notify = "�����̳�-����: �ɹ�, ��ϸ: " + (quantity ? quantity[1] : "��") + "���� ??"
              } else {
                merge.JDBean.notify = "�����̳�-����: �ɹ�, ��ϸ: �޾��� ??"
              }
              merge.JDBean.success = 1
            } else {
              merge.JDBean.fail = 1
              console.log("\n" + "�����̳�-����ǩ��ʧ�� " + Details)
              if (data.match(/(��ǩ��|����ǩ��)/)) {
                merge.JDBean.notify = "�����̳�-����: ʧ��, ԭ��: ��ǩ�� ??"
              } else if (data.match(/�����϶�|S101/)) {
                merge.JDBean.notify = "�����̳�-����: ʧ��, ǩ�������϶� ??"
              } else {
                merge.JDBean.notify = "�����̳�-����: ʧ��, ԭ��: δ֪ ??"
              }
            }
          }
        } catch (eor) {
          $nobyda.AnError("�����̳�-����", "JDBean", eor, response, data)
        } finally {
          resolve()
        }
      })
    }, s)
    if (out) setTimeout(resolve, out + s)
  });
}

function JingDongTurn(s) {
  merge.JDTurn = {}, merge.JDTurn.notify = "", merge.JDTurn.success = 0, merge.JDTurn.bean = 0;
  return new Promise((resolve, reject) => {
    if (disable("JDTurn")) return reject()
    const JDTUrl = {
      url: 'https://api.m.jd.com/client.action?functionId=wheelSurfIndex&body=%7B%22actId%22%3A%22jgpqtzjhvaoym%22%2C%22appSource%22%3A%22jdhome%22%7D&appid=ld',
      headers: {
        Cookie: KEY,
      }
    };
    $nobyda.get(JDTUrl, async function(error, response, data) {
      try {
        if (error) {
          throw new Error(error)
        } else {
          const cc = JSON.parse(data).data.lotteryCode
          const Details = LogDetails ? "response:\n" + data : '';
          if (cc) {
            console.log("\n" + "�����̳�-ת�̲�ѯ�ɹ� " + Details)
            return resolve(cc)
          } else {
            merge.JDTurn.notify = "�����̳�-ת��: ʧ��, ԭ��: ��ѯ���� ??"
            merge.JDTurn.fail = 1
            console.log("\n" + "�����̳�-ת�̲�ѯʧ�� " + Details)
          }
        }
      } catch (eor) {
        $nobyda.AnError("����ת��-��ѯ", "JDTurn", eor, response, data)
      } finally {
        reject()
      }
    })
    if (out) setTimeout(reject, out + s)
  }).then(data => {
    return JingDongTurnSign(s, data);
  }, () => {});
}

function JingDongTurnSign(s, code) {
  return new Promise(resolve => {
    setTimeout(() => {
      const JDTUrl = {
        url: `https://api.m.jd.com/client.action?functionId=lotteryDraw&body=%7B%22actId%22%3A%22jgpqtzjhvaoym%22%2C%22appSource%22%3A%22jdhome%22%2C%22lotteryCode%22%3A%22${code}%22%7D&appid=ld`,
        headers: {
          Cookie: KEY,
        }
      };
      $nobyda.get(JDTUrl, async function(error, response, data) {
        try {
          if (error) {
            throw new Error(error)
          } else {
            const cc = JSON.parse(data)
            const Details = LogDetails ? "response:\n" + data : '';
            const also = merge.JDTurn.notify ? true : false
            if (cc.code == 3) {
              console.log("\n" + "����ת��CookieʧЧ " + Details)
              merge.JDTurn.notify = "�����̳�-ת��: ʧ��, ԭ��: CookieʧЧ??"
              merge.JDTurn.fail = 1
            } else if (data.match(/(\"T216\"|�����)/)) {
              merge.JDTurn.notify = "�����̳�-ת��: ʧ��, ԭ��: ����� ??"
              merge.JDTurn.fail = 1
            } else if (data.match(/(����|\"910582\")/)) {
              console.log("\n" + "�����̳�-ת��ǩ���ɹ� " + Details)
              merge.JDTurn.bean += Number(cc.data.prizeSendNumber) || 0
              merge.JDTurn.notify += `${also?`\n`:``}�����̳�-ת��: ${also?`���`:`�ɹ�`}, ��ϸ: ${cc.data.prizeSendNumber||`��`}���� ??`
              merge.JDTurn.success += 1
              if (cc.data.chances != "0") {
                await JingDongTurnSign(2000, code)
              }
            } else if (data.match(/δ�н�/)) {
              merge.JDTurn.notify += `${also?`\n`:``}�����̳�-ת��: ${also?`���`:`�ɹ�`}, ״̬: δ�н� ??`
              merge.JDTurn.success += 1
              if (cc.data.chances != "0") {
                await JingDongTurnSign(2000, code)
              }
            } else {
              console.log("\n" + "�����̳�-ת��ǩ��ʧ�� " + Details)
              merge.JDTurn.fail = 1
              if (data.match(/(T215|����Ϊ0)/)) {
                merge.JDTurn.notify = "�����̳�-ת��: ʧ��, ԭ��: ��ת�� ??"
              } else if (data.match(/(T210|����)/)) {
                merge.JDTurn.notify = "�����̳�-ת��: ʧ��, ԭ��: ��֧������ ??"
              } else {
                merge.JDTurn.notify += `${also?`\n`:``}�����̳�-ת��: ʧ��, ԭ��: δ֪ ??${also?` (���)`:``}`
              }
            }
          }
        } catch (eor) {
          $nobyda.AnError("�����̳�-ת��", "JDTurn", eor, response, data)
        } finally {
          resolve()
        }
      })
    }, s)
    if (out) setTimeout(resolve, out + s)
  });
}

function JingRongSteel(s) {
  merge.JRSteel = {};
  return new Promise(resolve => {
    if (disable("JRSteel")) return resolve()
    setTimeout(() => {
      const JRSUrl = {
        url: 'https://ms.jr.jd.com/gw/generic/hy/h5/m/signIn1',
        headers: {
          Cookie: KEY
        },
        body: "reqData=%7B%22channelSource%22%3A%22JRAPP6.0%22%2C%22riskDeviceParam%22%3A%22%7B%7D%22%7D"
      };
      $nobyda.post(JRSUrl, function(error, response, data) {
        try {
          if (error) throw new Error(error)
          const cc = JSON.parse(data)
          const Details = LogDetails ? "response:\n" + data : '';
          if (data.match(/\"resBusiCode\":0/)) {
            console.log("\n" + "��������-���Gǩ���ɹ� " + Details)
            const leng = cc.resultData.resBusiData.actualTotalRewardsValue
            const spare = cc.resultData.resBusiData.baseReward
            merge.JRSteel.steel = leng ? leng > 9 ? `0.${leng}` : `0.0${leng}` : spare ? spare : 0
            merge.JRSteel.notify = `��������-���G: �ɹ�, ��ϸ: ${merge.JRSteel.steel || `��`}���G ??`
            merge.JRSteel.success = 1
          } else {
            console.log("\n" + "��������-���Gǩ��ʧ�� " + Details)
            merge.JRSteel.fail = 1
            if (data.match(/�Ѿ���ȡ|\"resBusiCode\":15/)) {
              merge.JRSteel.notify = "��������-���G: ʧ��, ԭ��: ��ǩ�� ??"
            } else if (data.match(/δʵ��/)) {
              merge.JRSteel.notify = "��������-���G: ʧ��, �˺�δʵ�� ??"
            } else if (data.match(/(\"resultCode\":3|���ȵ�¼)/)) {
              merge.JRSteel.notify = "��������-���G: ʧ��, ԭ��: CookieʧЧ??"
            } else {
              merge.JRSteel.notify = "��������-���G: ʧ��, ԭ��: δ֪ ??"
            }
          }
        } catch (eor) {
          $nobyda.AnError("��������-���G", "JRSteel", eor, response, data)
        } finally {
          resolve()
        }
      })
    }, s)
    if (out) setTimeout(resolve, out + s)
  });
}

function JingDongShake(s) {
  if (!merge.JDShake) merge.JDShake = {}, merge.JDShake.success = 0, merge.JDShake.bean = 0, merge.JDShake.notify = '';
  return new Promise(resolve => {
    if (disable("JDShake")) return resolve()
    setTimeout(() => {
      const JDSh = {
        url: 'https://api.m.jd.com/client.action?appid=vip_h5&functionId=vvipclub_shaking',
        headers: {
          Cookie: KEY,
        }
      };
      $nobyda.get(JDSh, async function(error, response, data) {
        try {
          if (error) {
            throw new Error(error)
          } else {
            const Details = LogDetails ? "response:\n" + data : '';
            const cc = JSON.parse(data)
            const also = merge.JDShake.notify ? true : false
            if (data.match(/prize/)) {
              console.log("\n" + "�����̳�-ҡһҡǩ���ɹ� " + Details)
              merge.JDShake.success += 1
              if (cc.data.prizeBean) {
                merge.JDShake.bean += cc.data.prizeBean.count || 0
                merge.JDShake.notify += `${also?`\n`:``}�����̳�-ҡҡ: ${also?`���`:`�ɹ�`}, ��ϸ: ${merge.JDShake.bean || `��`}���� ??`
              } else if (cc.data.prizeCoupon) {
                merge.JDShake.notify += `${also?`\n`:``}�����̳�-ҡҡ: ${also?`���, `:``}�����${cc.data.prizeCoupon.quota}��${cc.data.prizeCoupon.discount}�Ż�ȯ�� ${cc.data.prizeCoupon.limitStr}`
              } else {
                merge.JDShake.notify += `${also?`\n`:``}�����̳�-ҡҡ: �ɹ�, ��ϸ: δ֪ ??${also?` (���)`:``}`
              }
              if (cc.data.luckyBox.freeTimes != 0) {
                await JingDongShake(s)
              }
            } else {
              console.log("\n" + "�����̳�-ҡһҡǩ��ʧ�� " + Details)
              if (data.match(/true/)) {
                merge.JDShake.notify += `${also?`\n`:``}�����̳�-ҡҡ: �ɹ�, ��ϸ: �޽��� ??${also?` (���)`:``}`
                merge.JDShake.success += 1
                if (cc.data.luckyBox.freeTimes != 0) {
                  await JingDongShake(s)
                }
              } else {
                merge.JDShake.fail = 1
                if (data.match(/(�����|8000005|9000005)/)) {
                  merge.JDShake.notify = "�����̳�-ҡҡ: ʧ��, ԭ��: ��ҡ�� ??"
                } else if (data.match(/(δ��¼|101)/)) {
                  merge.JDShake.notify = "�����̳�-ҡҡ: ʧ��, ԭ��: CookieʧЧ??"
                } else {
                  merge.JDShake.notify += `${also?`\n`:``}�����̳�-ҡҡ: ʧ��, ԭ��: δ֪ ??${also?` (���)`:``}`
                }
              }
            }
          }
        } catch (eor) {
          $nobyda.AnError("�����̳�-ҡҡ", "JDShake", eor, response, data)
        } finally {
          resolve()
        }
      })
    }, s)
    if (out) setTimeout(resolve, out + s)
  });
}

function JDUserSignPre(s, key, title, ac) {
  merge[key] = {};
  if ($nobyda.isJSBox) {
    return JDUserSignPre2(s, key, title, ac);
  } else {
    return JDUserSignPre1(s, key, title, ac);
  }
}

function JDUserSignPre1(s, key, title, acData, ask) {
  return new Promise((resolve, reject) => {
    if (disable(key, title, 1)) return reject()
    const JDUrl = {
      url: 'https://api.m.jd.com/?client=wh5&functionId=qryH5BabelFloors',
      headers: {
        Cookie: KEY
      },
      opts: {
        'filter': 'try{var od=JSON.parse(body);var params=(od.floatLayerList||[]).filter(o=>o.params&&o.params.match(/enActK/)).map(o=>o.params).pop()||(od.floorList||[]).filter(o=>o.template=="signIn"&&o.signInfos&&o.signInfos.params&&o.signInfos.params.match(/enActK/)).map(o=>o.signInfos&&o.signInfos.params).pop();var tId=(od.floorList||[]).filter(o=>o.boardParams&&o.boardParams.turnTableId).map(o=>o.boardParams.turnTableId).pop();var page=od.paginationFlrs;return JSON.stringify({qxAct:params||null,qxTid:tId||null,qxPage:page||null})}catch(e){return `=> ��������������: ${e.message}`}'
      },
      body: `body=${encodeURIComponent(`{"activityId":"${acData}"${ask?`,"paginationParam":"2","paginationFlrs":"${ask}"`:``}}`)}`
    };
    $nobyda.post(JDUrl, async function(error, response, data) {
      try {
        if (error) {
          throw new Error(error)
        } else {
          const od = JSON.parse(data || '{}');
          const turnTableId = od.qxTid || (od.floorList || []).filter(o => o.boardParams && o.boardParams.turnTableId).map(o => o.boardParams.turnTableId).pop();
          const page = od.qxPage || od.paginationFlrs;
          if (data.match(/enActK/)) { // ����ǩ�������
            let params = od.qxAct || (od.floatLayerList || []).filter(o => o.params && o.params.match(/enActK/)).map(o => o.params).pop()
            if (!params) { // ��һ���ҵ�ǩ����������
              // floatLayerListδ�ҵ�ǩ���������ݣ���floorList�в���
              let signInfo = (od.floorList || []).filter(o => o.template == 'signIn' && o.signInfos && o.signInfos.params && o.signInfos.params.match(/enActK/))
                .map(o => o.signInfos).pop();
              if (signInfo) {
                if (signInfo.signStat == '1') {
                  console.log(`\n${title}�ظ�ǩ��`)
                  merge[key].notify = `${title}: ʧ��, ԭ��: ��ǩ�� ??`
                  merge[key].fail = 1
                } else {
                  params = signInfo.params;
                }
              } else {
                merge[key].notify = `${title}: ʧ��, ������쳣 ??`
                merge[key].fail = 1
              }
            }
            if (params) {
              return resolve({
                params: params
              }); // ִ��ǩ������
            }
          } else if (turnTableId) { // ��ǩ������, �����й�ע����ǩ��
            const boxds = $nobyda.read("JD_Follow_disable") === "false" ? false : true
            if (boxds) {
              console.log(`\n${title}��ע����`)
              return resolve(parseInt(turnTableId))
            } else {
              merge[key].notify = `${title}: ʧ��, ��Ҫ��ע���� ??`
              merge[key].fail = 1
            }
          } else if (page && !ask) { // ��ǩ������, ���Դ��β�ѯ
            const boxds = $nobyda.read("JD_Retry_disable") === "false" ? false : true
            if (boxds) {
              console.log(`\n${title}���β�ѯ`)
              return resolve(page)
            } else {
              merge[key].notify = `${title}: ʧ��, �볢�Կ�����ǿ ??`
              merge[key].fail = 1
            }
          } else {
            merge[key].notify = `${title}: ʧ��, ${!data ? `��Ҫ�ֶ�ִ��` : `���������`} ??`
            merge[key].fail = 1
          }
        }
        reject()
      } catch (eor) {
        $nobyda.AnError(title, key, eor, response, data)
        reject()
      }
    })
    if (out) setTimeout(reject, out + s)
  }).then(data => {
    disable(key, title, 2)
    if (typeof(data) == "object") return JDUserSign1(s, key, title, encodeURIComponent(JSON.stringify(data)));
    if (typeof(data) == "number") return JDUserSign2(s, key, title, data);
    if (typeof(data) == "string") return JDUserSignPre1(s, key, title, acData, data);
  }, () => disable(key, title, 2))
}

function JDUserSignPre2(s, key, title, acData) {
  return new Promise((resolve, reject) => {
    if (disable(key, title, 1)) return reject()
    const JDUrl = {
      url: `https://pro.m.jd.com/mall/active/${acData}/index.html`,
      headers: {
        Cookie: KEY,
      }
    };
    $nobyda.get(JDUrl, async function(error, response, data) {
      try {
        if (error) {
          throw new Error(error)
        } else {
          const act = data.match(/\"params\":\"\{\\\"enActK.+?\\\"\}\"/)
          const turnTable = data.match(/\"turnTableId\":\"(\d+)\"/)
          const page = data.match(/\"paginationFlrs\":\"(\[\[.+?\]\])\"/)
          if (act) { // ����ǩ�������
            return resolve(act)
          } else if (turnTable) { // ��ǩ������, �����й�ע����ǩ��
            const boxds = $nobyda.read("JD_Follow_disable") === "false" ? false : true
            if (boxds) {
              console.log(`\n${title}��ע����`)
              return resolve(parseInt(turnTable[1]))
            } else {
              merge[key].notify = `${title}: ʧ��, ��Ҫ��ע���� ??`
              merge[key].fail = 1
            }
          } else if (page) { // ��ǩ������, ���Դ��β�ѯ
            const boxds = $nobyda.read("JD_Retry_disable") === "false" ? false : true
            if (boxds) {
              console.log(`\n${title}���β�ѯ`)
              return resolve(page[1])
            } else {
              merge[key].notify = `${title}: ʧ��, �볢�Կ�����ǿ ??`
              merge[key].fail = 1
            }
          } else {
            merge[key].notify = `${title}: ʧ��, ${!data ? `��Ҫ�ֶ�ִ��` : `���������`} ??`
            merge[key].fail = 1
          }
        }
        reject()
      } catch (eor) {
        $nobyda.AnError(title, key, eor, response, data)
        reject()
      }
    })
    if (out) setTimeout(reject, out + s)
  }).then(data => {
    disable(key, title, 2)
    if (typeof(data) == "object") return JDUserSign1(s, key, title, encodeURIComponent(`{${data}}`));
    if (typeof(data) == "number") return JDUserSign2(s, key, title, data)
    if (typeof(data) == "string") return JDUserSignPre1(s, key, title, acData, data)
  }, () => disable(key, title, 2))
}

function JDUserSign1(s, key, title, body) {
  return new Promise(resolve => {
    setTimeout(() => {
      const JDUrl = {
        url: 'https://api.m.jd.com/client.action?functionId=userSign',
        headers: {
          Cookie: KEY
        },
        body: `body=${body}&client=wh5`
      };
      $nobyda.post(JDUrl, function(error, response, data) {
        try {
          if (error) {
            throw new Error(error)
          } else {
            const Details = LogDetails ? `response:\n${data}` : '';
            if (data.match(/ǩ���ɹ�/)) {
              console.log(`\n${title}ǩ���ɹ�(1)${Details}`)
              if (data.match(/\"text\":\"\d+����\"/)) {
                merge[key].bean = data.match(/\"text\":\"(\d+)����\"/)[1]
              }
              merge[key].notify = `${title}: �ɹ�, ��ϸ: ${merge[key].bean || '��'}���� ??`
              merge[key].success = 1
            } else {
              console.log(`\n${title}ǩ��ʧ��(1)${Details}`)
              if (data.match(/(��ǩ��|����ȡ)/)) {
                merge[key].notify = `${title}: ʧ��, ԭ��: ��ǩ�� ??`
              } else if (data.match(/(������|�ѽ���|δ��ʼ)/)) {
                merge[key].notify = `${title}: ʧ��, ԭ��: ��ѽ��� ??`
              } else if (data.match(/\"code\":\"?3\"?/)) {
                merge[key].notify = `${title}: ʧ��, ԭ��: CookieʧЧ??`
              } else {
                const ng = data.match(/\"(errorMessage|subCodeMsg)\":\"(.+?)\"/)
                merge[key].notify = `${title}: ʧ��, ${ng?ng[2]:`ԭ��: δ֪`} ??`
              }
              merge[key].fail = 1
            }
          }
        } catch (eor) {
          $nobyda.AnError(title, key, eor, response, data)
        } finally {
          resolve()
        }
      })
    }, s)
    if (out) setTimeout(resolve, out + s)
  });
}

async function JDUserSign2(s, key, title, tid) {
  await new Promise(resolve => {
    $nobyda.get({
      url: `https://jdjoy.jd.com/api/turncard/channel/detail?turnTableId=${tid}&invokeKey=NRp8OPxZMFXmGkaE`,
      headers: {
        Cookie: KEY
      }
    }, function(error, response, data) {
      resolve()
    })
    if (out) setTimeout(resolve, out + s)
  });
  return new Promise(resolve => {
    setTimeout(() => {
      const JDUrl = {
        url: 'https://jdjoy.jd.com/api/turncard/channel/sign?invokeKey=NRp8OPxZMFXmGkaE',
        headers: {
          Cookie: KEY
        },
        body: `turnTableId=${tid}`
      };
      $nobyda.post(JDUrl, function(error, response, data) {
        try {
          if (error) {
            throw new Error(error)
          } else {
            const Details = LogDetails ? `response:\n${data}` : '';
            if (data.match(/\"success\":true/)) {
              console.log(`\n${title}ǩ���ɹ�(2)${Details}`)
              if (data.match(/\"jdBeanQuantity\":\d+/)) {
                merge[key].bean = data.match(/\"jdBeanQuantity\":(\d+)/)[1]
              }
              merge[key].notify = `${title}: �ɹ�, ��ϸ: ${merge[key].bean || '��'}���� ??`
              merge[key].success = 1
            } else {
              const captcha = /�������֤/.test(data);
              if (data.match(/(�Ѿ�ǩ��|�Ѿ���ȡ)/)) {
                merge[key].notify = `${title}: ʧ��, ԭ��: ��ǩ�� ??`
              } else if (data.match(/(������|�ѽ���|δ��ʼ)/)) {
                merge[key].notify = `${title}: ʧ��, ԭ��: ��ѽ��� ??`
              } else if (data.match(/(û�е�¼|B0001)/)) {
                merge[key].notify = `${title}: ʧ��, ԭ��: CookieʧЧ??`
              } else if (!captcha) {
                const ng = data.match(/\"(errorMessage|subCodeMsg)\":\"(.+?)\"/)
                merge[key].notify = `${title}: ʧ��, ${ng?ng[2]:`ԭ��: δ֪`} ??`
              }
              if (!captcha) merge[key].fail = 1;
              console.log(`\n${title}ǩ��ʧ��(2)${captcha?`\n��Ҫƴͼ��֤, ����֪ͨ��¼ ??`:``}${Details}`)
            }
          }
        } catch (eor) {
          $nobyda.AnError(title, key, eor, response, data)
        } finally {
          resolve()
        }
      })
    }, 200 + s)
    if (out) setTimeout(resolve, out + s + 200)
  });
}

function JDFlashSale(s) {
  merge.JDFSale = {};
  return new Promise(resolve => {
    if (disable("JDFSale")) return resolve()
    setTimeout(() => {
      const JDPETUrl = {
        url: 'https://api.m.jd.com/client.action?functionId=partitionJdSgin',
        headers: {
          Cookie: KEY
        },
        body: "body=%7B%22version%22%3A%22v2%22%7D&client=apple&clientVersion=9.0.8&openudid=1fce88cd05c42fe2b054e846f11bdf33f016d676&sign=6768e2cf625427615dd89649dd367d41&st=1597248593305&sv=121"
      };
      $nobyda.post(JDPETUrl, async function(error, response, data) {
        try {
          if (error) {
            throw new Error(error)
          } else {
            const Details = LogDetails ? "response:\n" + data : '';
            const cc = JSON.parse(data)
            if (cc.result && cc.result.code == 0) {
              console.log("\n" + "�����̳�-����ǩ���ɹ� " + Details)
              merge.JDFSale.bean = cc.result.jdBeanNum || 0
              merge.JDFSale.notify = "�����̳�-����: �ɹ�, ��ϸ: " + (merge.JDFSale.bean || "��") + "���� ??"
              merge.JDFSale.success = 1
            } else {
              console.log("\n" + "�����̳�-����ǩ��ʧ�� " + Details)
              if (data.match(/(��ǩ��|����ȡ|\"2005\")/)) {
                merge.JDFSale.notify = "�����̳�-����: ʧ��, ԭ��: ��ǩ�� ??"
              } else if (data.match(/������|�ѽ���|\"2008\"|\"3001\"/)) {
                await FlashSaleDivide(s); //�Ϸ־���
                return
              } else if (data.match(/(\"code\":\"3\"|\"1003\")/)) {
                merge.JDFSale.notify = "�����̳�-����: ʧ��, ԭ��: CookieʧЧ??"
              } else {
                const msg = data.match(/\"msg\":\"([\u4e00-\u9fa5].+?)\"/)
                merge.JDFSale.notify = `�����̳�-����: ʧ��, ${msg ? msg[1] : `ԭ��: δ֪`} ??`
              }
              merge.JDFSale.fail = 1
            }
          }
        } catch (eor) {
          $nobyda.AnError("�����̳�-����", "JDFSale", eor, response, data)
        } finally {
          resolve()
        }
      })
    }, s)
    if (out) setTimeout(resolve, out + s)
  });
}

function FlashSaleDivide(s) {
  return new Promise(resolve => {
    setTimeout(() => {
      const Url = {
        url: 'https://api.m.jd.com/client.action?functionId=partitionJdShare',
        headers: {
          Cookie: KEY
        },
        body: "body=%7B%22version%22%3A%22v2%22%7D&client=apple&clientVersion=9.0.8&openudid=1fce88cd05c42fe2b054e846f11bdf33f016d676&sign=49baa3b3899b02bbf06cdf41fe191986&st=1597682588351&sv=111"
      };
      $nobyda.post(Url, function(error, response, data) {
        try {
          if (error) {
            throw new Error(error)
          } else {
            const Details = LogDetails ? "response:\n" + data : '';
            const cc = JSON.parse(data)
            if (cc.result.code == 0) {
              merge.JDFSale.success = 1
              merge.JDFSale.bean = cc.result.jdBeanNum || 0
              merge.JDFSale.notify = "��������-�Ϸ�: �ɹ�, ��ϸ: " + (merge.JDFSale.bean || "��") + "���� ??"
              console.log("\n" + "��������-�Ϸ�ǩ���ɹ� " + Details)
            } else {
              merge.JDFSale.fail = 1
              console.log("\n" + "��������-�Ϸ�ǩ��ʧ�� " + Details)
              if (data.match(/�Ѳ���|����ȡ|\"2006\"/)) {
                merge.JDFSale.notify = "��������-�Ϸ�: ʧ��, ԭ��: �ѹϷ� ??"
              } else if (data.match(/������|�ѽ���|δ��ʼ|\"2008\"|\"2012\"/)) {
                merge.JDFSale.notify = "��������-�Ϸ�: ʧ��, ԭ��: ��ѽ��� ??"
              } else if (data.match(/\"code\":\"1003\"|δ��ȡ/)) {
                merge.JDFSale.notify = "��������-�Ϸ�: ʧ��, ԭ��: CookieʧЧ??"
              } else {
                const msg = data.match(/\"msg\":\"([\u4e00-\u9fa5].+?)\"/)
                merge.JDFSale.notify = `��������-�Ϸ�: ʧ��, ${msg ? msg[1] : `ԭ��: δ֪`} ??`
              }
            }
          }
        } catch (eor) {
          $nobyda.AnError("��������-�Ϸ�", "JDFSale", eor, response, data)
        } finally {
          resolve()
        }
      })
    }, s)
    if (out) setTimeout(resolve, out + s)
  });
}

function JingDongCash(s) {
  merge.JDCash = {};
  return new Promise(resolve => {
    if (disable("JDCash")) return resolve()
    setTimeout(() => {
      const JDCAUrl = {
        url: 'https://api.m.jd.com/client.action?functionId=ccSignInNew',
        headers: {
          Cookie: KEY
        },
        body: "body=%7B%22pageClickKey%22%3A%22CouponCenter%22%2C%22eid%22%3A%22O5X6JYMZTXIEX4VBCBWEM5PTIZV6HXH7M3AI75EABM5GBZYVQKRGQJ5A2PPO5PSELSRMI72SYF4KTCB4NIU6AZQ3O6C3J7ZVEP3RVDFEBKVN2RER2GTQ%22%2C%22shshshfpb%22%3A%22v1%5C%2FzMYRjEWKgYe%2BUiNwEvaVlrHBQGVwqLx4CsS9PH1s0s0Vs9AWk%2B7vr9KSHh3BQd5NTukznDTZnd75xHzonHnw%3D%3D%22%2C%22childActivityUrl%22%3A%22openapp.jdmobile%253a%252f%252fvirtual%253fparams%253d%257b%255c%2522category%255c%2522%253a%255c%2522jump%255c%2522%252c%255c%2522des%255c%2522%253a%255c%2522couponCenter%255c%2522%257d%22%2C%22monitorSource%22%3A%22cc_sign_ios_index_config%22%7D&client=apple&clientVersion=8.5.0&d_brand=apple&d_model=iPhone8%2C2&openudid=1fce88cd05c42fe2b054e846f11bdf33f016d676&scope=11&screen=1242%2A2208&sign=1cce8f76d53fc6093b45a466e93044da&st=1581084035269&sv=102"
      };
      $nobyda.post(JDCAUrl, function(error, response, data) {
        try {
          if (error) {
            throw new Error(error)
          } else {
            const Details = LogDetails ? "response:\n" + data : '';
            const cc = JSON.parse(data)
            if (cc.busiCode == "0") {
              console.log("\n" + "�����ֽ�-���ǩ���ɹ� " + Details)
              merge.JDCash.success = 1
              merge.JDCash.Cash = cc.result.signResult.signData.amount || 0
              merge.JDCash.notify = `�����ֽ�-���: �ɹ�, ��ϸ: ${merge.JDCash.Cash || `��`}��� ??`
            } else {
              console.log("\n" + "�����ֽ�-���ǩ��ʧ�� " + Details)
              merge.JDCash.fail = 1
              if (data.match(/(\"busiCode\":\"1002\"|���ǩ��)/)) {
                merge.JDCash.notify = "�����ֽ�-���: ʧ��, ԭ��: ��ǩ�� ??"
              } else if (data.match(/(������|�ѽ���)/)) {
                merge.JDCash.notify = "�����ֽ�-���: ʧ��, ԭ��: ��ѽ��� ??"
              } else if (data.match(/(\"busiCode\":\"3\"|δ��¼)/)) {
                merge.JDCash.notify = "�����ֽ�-���: ʧ��, ԭ��: CookieʧЧ??"
              } else {
                const msg = data.split(/\"msg\":\"([\u4e00-\u9fa5].+?)\"/)[1];
                merge.JDCash.notify = `�����ֽ�-���: ʧ��, ${msg||`ԭ��: δ֪`} ??`
              }
            }
          }
        } catch (eor) {
          $nobyda.AnError("�����ֽ�-���", "JDCash", eor, response, data)
        } finally {
          resolve()
        }
      })
    }, s)
    if (out) setTimeout(resolve, out + s)
  });
}

function JDMagicCube(s, sign) {
  merge.JDCube = {};
  return new Promise((resolve, reject) => {
    if (disable("JDCube")) return reject()
    const JDUrl = {
      url: `https://api.m.jd.com/client.action?functionId=getNewsInteractionInfo&appid=smfe${sign?`&body=${encodeURIComponent(`{"sign":${sign}}`)}`:``}`,
      headers: {
        Cookie: KEY,
      }
    };
    $nobyda.get(JDUrl, async (error, response, data) => {
      try {
        if (error) throw new Error(error)
        const Details = LogDetails ? "response:\n" + data : '';
        console.log(`\n����ħ��-���Բ�ѯ�(${sign}) ${Details}`)
        if (data.match(/\"interactionId\":\d+/)) {
          resolve({
            id: data.match(/\"interactionId\":(\d+)/)[1],
            sign: sign || null
          })
        } else if (data.match(/�����쳣/) && sign) {
          await JDMagicCube(s, sign == 2 ? 1 : null)
          reject()
        } else {
          resolve(null)
        }
      } catch (eor) {
        $nobyda.AnError("����ħ��-��ѯ", "JDCube", eor, response, data)
        reject()
      }
    })
    if (out) setTimeout(reject, out + s)
  }).then(data => {
    return JDMagicCubeSign(s, data)
  }, () => {});
}

function JDMagicCubeSign(s, id) {
  return new Promise(resolve => {
    setTimeout(() => {
      const JDMCUrl = {
        url: `https://api.m.jd.com/client.action?functionId=getNewsInteractionLotteryInfo&appid=smfe${id?`&body=${encodeURIComponent(`{${id.sign?`"sign":${id.sign},`:``}"interactionId":${id.id}}`)}`:``}`,
        headers: {
          Cookie: KEY,
        }
      };
      $nobyda.get(JDMCUrl, function(error, response, data) {
        try {
          if (error) {
            throw new Error(error)
          } else {
            const Details = LogDetails ? "response:\n" + data : '';
            const cc = JSON.parse(data)
            if (data.match(/(\"name\":)/)) {
              console.log("\n" + "�����̳�-ħ��ǩ���ɹ� " + Details)
              merge.JDCube.success = 1
              if (data.match(/(\"name\":\"����\")/)) {
                merge.JDCube.bean = cc.result.lotteryInfo.quantity || 0
                merge.JDCube.notify = `�����̳�-ħ��: �ɹ�, ��ϸ: ${merge.JDCube.bean || `��`}���� ??`
              } else {
                merge.JDCube.notify = `�����̳�-ħ��: �ɹ�, ��ϸ: ${cc.result.lotteryInfo.name || `δ֪`} ??`
              }
            } else {
              console.log("\n" + "�����̳�-ħ��ǩ��ʧ�� " + Details)
              merge.JDCube.fail = 1
              if (data.match(/(һ������|��ǩ��|����ȡ)/)) {
                merge.JDCube.notify = "�����̳�-ħ��: ʧ��, ԭ��: �޻��� ??"
              } else if (data.match(/(������|�ѽ���)/)) {
                merge.JDCube.notify = "�����̳�-ħ��: ʧ��, ԭ��: ��ѽ��� ??"
              } else if (data.match(/(\"code\":3)/)) {
                merge.JDCube.notify = "�����̳�-ħ��: ʧ��, ԭ��: CookieʧЧ??"
              } else {
                merge.JDCube.notify = "�����̳�-ħ��: ʧ��, ԭ��: δ֪ ??"
              }
            }
          }
        } catch (eor) {
          $nobyda.AnError("�����̳�-ħ��", "JDCube", eor, response, data)
        } finally {
          resolve()
        }
      })
    }, s)
    if (out) setTimeout(resolve, out + s)
  });
}

function JingDongSubsidy(s) {
  merge.subsidy = {};
  return new Promise(resolve => {
    if (disable("subsidy")) return resolve()
    setTimeout(() => {
      const subsidyUrl = {
        url: 'https://ms.jr.jd.com/gw/generic/uc/h5/m/signIn7',
        headers: {
          Referer: "https://active.jd.com/forever/cashback/index",
          Cookie: KEY
        }
      };
      $nobyda.get(subsidyUrl, function(error, response, data) {
        try {
          if (error) {
            throw new Error(error)
          } else {
            const Details = LogDetails ? "response:\n" + data : '';
            const cc = JSON.parse(data)
            if (cc.resultCode == 0 && cc.resultData.data && cc.resultData.data.thisAmount) {
              console.log("\n" + "�����̳�-����ǩ���ɹ� " + Details)
              merge.subsidy.subsidy = cc.resultData.data.thisAmountStr
              merge.subsidy.notify = `�����̳�-����: �ɹ�, ��ϸ: ${merge.subsidy.subsidy||`��`}���� ??`
              merge.subsidy.success = 1
            } else {
              console.log("\n" + "�����̳�-����ǩ��ʧ�� " + Details)
              merge.subsidy.fail = 1
              if (data.match(/�Ѵ���|"thisAmount":0/)) {
                merge.subsidy.notify = "�����̳�-����: ʧ��, ԭ��: �޽��� ??"
              } else if (data.match(/���ȵ�¼/)) {
                merge.subsidy.notify = "�����̳�-����: ʧ��, ԭ��: CookieʧЧ??"
              } else {
                const msg = data.split(/\"msg\":\"([\u4e00-\u9fa5].+?)\"/)[1];
                merge.subsidy.notify = `�����̳�-����: ʧ��, ${msg||`ԭ��: δ֪`} ??`
              }
            }
          }
        } catch (eor) {
          $nobyda.AnError("�����̳�-����", "subsidy", eor, response, data)
        } finally {
          resolve()
        }
      })
    }, s)
    if (out) setTimeout(resolve, out + s)
  });
}

function JingRongDoll(s, key, title, code, type, num, award, belong) {
  merge[key] = {};
  return new Promise(resolve => {
    if (disable(key)) return resolve()
    setTimeout(() => {
      const DollUrl = {
        url: "https://nu.jr.jd.com/gw/generic/jrm/h5/m/process",
        headers: {
          Cookie: KEY
        },
        body: `reqData=${encodeURIComponent(`{"actCode":"${code}","type":${type?type:`3`}${code=='F68B2C3E71'?`,"frontParam":{"belong":"${belong}"}`:code==`1DF13833F7`?`,"frontParam":{"channel":"JR","belong":4}`:``}}`)}`
      };
      $nobyda.post(DollUrl, async function(error, response, data) {
        try {
          if (error) {
            throw new Error(error)
          } else {
            var cc = JSON.parse(data)
            const Details = LogDetails ? "response:\n" + data : '';
            if (cc.resultCode == 0) {
              if (cc.resultData.data.businessData != null) {
                console.log(`\n${title}��ѯ�ɹ� ${Details}`)
                if (cc.resultData.data.businessData.pickStatus == 2) {
                  if (data.match(/\"rewardPrice\":\"\d.*?\"/)) {
                    const JRDoll_bean = data.match(/\"rewardPrice\":\"(\d.*?)\"/)[1]
                    const JRDoll_type = data.match(/\"rewardName\":\"��������\"/) ? true : false
                    await JingRongDoll(s, key, title, code, '4', JRDoll_bean, JRDoll_type)
                  } else {
                    merge[key].success = 1
                    merge[key].notify = `${title}: �ɹ�, ��ϸ: �޽��� ??`
                  }
                } else if (code == 'F68B2C3E71' || code == '1DF13833F7') {
                  if (!data.match(/"businessCode":"30\dss?q"/)) {
                    merge[key].success = 1
                    const ct = data.match(/\"count\":\"?(\d.*?)\"?,/)
                    if (code == 'F68B2C3E71' && belong == 'xianjin') {
                      merge[key].Money = ct ? ct[1] > 9 ? `0.${ct[1]}` : `0.0${ct[1]}` : 0
                      merge[key].notify = `${title}: �ɹ�, ��ϸ: ${merge[key].Money||`��`}�ֽ� ??`
                    } else if (code == 'F68B2C3E71' && belong == 'jingdou') {
                      merge[key].bean = ct ? ct[1] : 0;
                      merge[key].notify = `${title}: �ɹ�, ��ϸ: ${merge[key].bean||`��`}���� ??`
                    } else if (code == '1DF13833F7') {
                      merge[key].subsidy = ct ? ct[1] : 0;
                      merge[key].notify = `${title}: �ɹ�, ��ϸ: ${merge[key].subsidy||`��`}���� ??`
                    }
                  } else {
                    const es = cc.resultData.data.businessMsg
                    const ep = cc.resultData.data.businessData.businessMsg
                    const tp = data.match(/����ȡ|300ss?q/) ? `��ǩ��` : `${ep||es||cc.resultMsg||`δ֪`}`
                    merge[key].notify = `${title}: ʧ��, ԭ��: ${tp} ??`
                    merge[key].fail = 1
                  }
                } else {
                  merge[key].notify = `${title}: ʧ��, ԭ��: ��ǩ�� ??`;
                  merge[key].fail = 1
                }
              } else if (cc.resultData.data.businessCode == 200) {
                console.log(`\n${title}ǩ���ɹ� ${Details}`)
                if (!award) {
                  merge[key].bean = num ? num.match(/\d+/)[0] : 0
                } else {
                  merge[key].subsidy = num || 0
                }
                merge[key].success = 1
                merge[key].notify = `${title}: �ɹ�, ��ϸ: ${(award?num:merge[key].bean)||`��`}${award?`���� ??`:`���� ??`}`
              } else {
                console.log(`\n${title}��ȡ�쳣 ${Details}`)
                if (num) console.log(`\n${title} �볢���ֶ���ȡ, Ԥ�ƿɵ�${num}${award?`����`:`����`}: \nhttps://uf1.jr.jd.com/up/redEnvelopes/index.html?actCode=${code}\n`);
                merge[key].fail = 1;
                merge[key].notify = `${title}: ʧ��, ԭ��: ��ȡ�쳣 ??`;
              }
            } else {
              console.log(`\n${title}ǩ��ʧ�� ${Details}`)
              const redata = typeof(cc.resultData) == 'string' ? cc.resultData : ''
              merge[key].notify = `${title}: ʧ��, ${cc.resultCode==3?`ԭ��: CookieʧЧ??`:`${redata||'ԭ��: δ֪ ??'}`}`
              merge[key].fail = 1;
            }
          }
        } catch (eor) {
          $nobyda.AnError(title, key, eor, response, data)
        } finally {
          resolve()
        }
      })
    }, s)
    if (out) setTimeout(resolve, out + s)
  });
}

function JingDongGetCash(s) {
  merge.JDGetCash = {};
  return new Promise(resolve => {
    if (disable("JDGetCash")) return resolve()
    setTimeout(() => {
      const GetCashUrl = {
        url: 'https://api.m.jd.com/client.action?functionId=cash_sign&body=%7B%22remind%22%3A0%2C%22inviteCode%22%3A%22%22%2C%22type%22%3A0%2C%22breakReward%22%3A0%7D&client=apple&clientVersion=9.0.8&openudid=1fce88cd05c42fe2b054e846f11bdf33f016d676&sign=7e2f8bcec13978a691567257af4fdce9&st=1596954745073&sv=111',
        headers: {
          Cookie: KEY,
        }
      };
      $nobyda.get(GetCashUrl, function(error, response, data) {
        try {
          if (error) {
            throw new Error(error)
          } else {
            const cc = JSON.parse(data);
            const Details = LogDetails ? "response:\n" + data : '';
            if (cc.data.success && cc.data.result) {
              console.log("\n" + "�����̳�-�ֽ�ǩ���ɹ� " + Details)
              merge.JDGetCash.success = 1
              merge.JDGetCash.Money = cc.data.result.signCash || 0
              merge.JDGetCash.notify = `�����̳�-�ֽ�: �ɹ�, ��ϸ: ${cc.data.result.signCash||`��`}�ֽ� ??`
            } else {
              console.log("\n" + "�����̳�-�ֽ�ǩ��ʧ�� " + Details)
              merge.JDGetCash.fail = 1
              if (data.match(/\"bizCode\":201|�Ѿ�ǩ��/)) {
                merge.JDGetCash.notify = "�����̳�-�ֽ�: ʧ��, ԭ��: ��ǩ�� ??"
              } else if (data.match(/\"code\":300|�˳���¼/)) {
                merge.JDGetCash.notify = "�����̳�-�ֽ�: ʧ��, ԭ��: CookieʧЧ??"
              } else {
                merge.JDGetCash.notify = "�����̳�-�ֽ�: ʧ��, ԭ��: δ֪ ??"
              }
            }
          }
        } catch (eor) {
          $nobyda.AnError("�����̳�-�ֽ�", "JDGetCash", eor, response, data)
        } finally {
          resolve()
        }
      })
    }, s)
    if (out) setTimeout(resolve, out + s)
  });
}

function JingDongStore(s) {
  merge.JDGStore = {};
  return new Promise(resolve => {
    if (disable("JDGStore")) return resolve()
    setTimeout(() => {
      $nobyda.get({
        url: 'https://api.m.jd.com/api?appid=jdsupermarket&functionId=smtg_sign&clientVersion=8.0.0&client=m&body=%7B%7D',
        headers: {
          Cookie: KEY,
          Origin: `https://jdsupermarket.jd.com`
        }
      }, (error, response, data) => {
        try {
          if (error) throw new Error(error);
          const cc = JSON.parse(data);
          const Details = LogDetails ? "response:\n" + data : '';
          if (cc.data && cc.data.success === true && cc.data.bizCode === 0) {
            console.log(`\n�����̳�-����ǩ���ɹ� ${Details}`)
            merge.JDGStore.success = 1
            merge.JDGStore.bean = cc.data.result.jdBeanCount || 0
            merge.JDGStore.notify = `�����̳�-����: �ɹ�, ��ϸ: ${merge.JDGStore.bean||`��`}���� ??`
          } else {
            if (!cc.data) cc.data = {}
            console.log(`\n�����̳�-����ǩ��ʧ�� ${Details}`)
            const tp = cc.data.bizCode == 811 ? `��ǩ��` : cc.data.bizCode == 300 ? `CookieʧЧ` : `${cc.data.bizMsg||`δ֪`}`
            merge.JDGStore.notify = `�����̳�-����: ʧ��, ԭ��: ${tp}${cc.data.bizCode==300?`??`:` ??`}`
            merge.JDGStore.fail = 1
          }
        } catch (eor) {
          $nobyda.AnError("�����̳�-����", "JDGStore", eor, response, data)
        } finally {
          resolve()
        }
      })
    }, s)
    if (out) setTimeout(resolve, out + s)
  });
}

function JDSecKilling(s) { //��ȯ����
  merge.JDSecKill = {};
  return new Promise((resolve, reject) => {
    if (disable("JDSecKill")) return reject();
    setTimeout(() => {
      $nobyda.post({
        url: 'https://api.m.jd.com/client.action',
        headers: {
          Cookie: KEY,
          Origin: 'https://h5.m.jd.com'
        },
        body: 'functionId=homePageV2&appid=SecKill2020'
      }, (error, response, data) => {
        try {
          if (error) throw new Error(error);
          const Details = LogDetails ? "response:\n" + data : '';
          const cc = JSON.parse(data);
          if (cc.code == 203 || cc.code == 3 || cc.code == 101) {
            merge.JDSecKill.notify = `������ɱ-���: ʧ��, ԭ��: CookieʧЧ??`;
          } else if (cc.result && cc.result.projectId && cc.result.taskId) {
            console.log(`\n������ɱ-�����ѯ�ɹ� ${Details}`)
            return resolve({
              projectId: cc.result.projectId,
              taskId: cc.result.taskId
            })
          } else {
            merge.JDSecKill.notify = `������ɱ-���: ʧ��, ������Ч� ??`;
          }
          merge.JDSecKill.fail = 1;
          console.log(`\n������ɱ-�����ѯʧ�� ${Details}`)
          reject()
        } catch (eor) {
          $nobyda.AnError("������ɱ-��ѯ", "JDSecKill", eor, response, data)
          reject()
        }
      })
    }, s)
    if (out) setTimeout(resolve, out + s)
  }).then(async (id) => {
    await new Promise(resolve => {
      $nobyda.post({
        url: 'https://api.m.jd.com/client.action',
        headers: {
          Cookie: KEY,
          Origin: 'https://h5.m.jd.com'
        },
        body: `functionId=doInteractiveAssignment&body=%7B%22encryptProjectId%22%3A%22${id.projectId}%22%2C%22encryptAssignmentId%22%3A%22${id.taskId}%22%2C%22completionFlag%22%3Atrue%7D&client=wh5&appid=SecKill2020`
      }, (error, response, data) => {
        try {
          if (error) throw new Error(error);
          const Details = LogDetails ? "response:\n" + data : '';
          const cc = JSON.parse(data);
          if (cc.msg == 'success' && cc.subCode == 0) {
            console.log(`\n������ɱ-���ǩ���ɹ� ${Details}`);
            const qt = data.match(/"discount":(\d.*?),/);
            merge.JDSecKill.success = 1;
            merge.JDSecKill.Cash = qt ? qt[1] : 0;
            merge.JDSecKill.notify = `������ɱ-���: �ɹ�, ��ϸ: ${merge.JDSecKill.Cash||`��`}��� ??`;
          } else {
            console.log(`\n������ɱ-���ǩ��ʧ�� ${Details}`);
            merge.JDSecKill.fail = 1;
            merge.JDSecKill.notify = `������ɱ-���: ʧ��, ${cc.subCode==103?`ԭ��: ����ȡ`:cc.msg?cc.msg:`ԭ��: δ֪`} ??`;
          }
        } catch (eor) {
          $nobyda.AnError("������ɱ-��ȡ", "JDSecKill", eor, response, data);
        } finally {
          resolve();
        }
      })
    })
  }, () => {});
}

function JingDongBuyCar(s, ActId) {
  merge.JDBuyCar = {};
  return new Promise((resolve, reject) => {
    if (disable("JDBuyCar")) return reject();
    setTimeout(() => {
      $nobyda.get({
        url: 'https://cgame-stadium.jd.com/api/v1/first/login',
        headers: {
          Cookie: KEY,
          ActivityId: ActId
        }
      }, (error, response, data) => {
        try {
          if (error) throw new Error(error);
          const Details = LogDetails ? "response:\n" + data : '';
          console.log(`\n��������-���ǩ��״̬ ${Details}`)
          const cc = JSON.parse(data);
          if (cc.status && cc.data && cc.data.firstLoginStatus) {
            resolve()
          } else {
            const qt = cc.status && cc.data && cc.data.firstLoginStatus === false ? `ԭ��: ��ǩ��` : cc.error && cc.error.code == 2000 ? `ԭ��: CookieʧЧ` : cc.error && cc.error.msg ? cc.error.msg : `ԭ��: δ֪`;
            merge.JDBuyCar.notify = `�����̳�-����: ʧ��, ${qt}${cc.error&&cc.error.code==2000?`??`:` ??`}`
            merge.JDBuyCar.fail = 1;
            reject()
          }
        } catch (eor) {
          $nobyda.AnError("��������-״̬", "JDBuyCar", eor, response, data)
          reject()
        }
      })
    }, s)
    if (out) setTimeout(resolve, out + s)
  }).then(async () => {
    await new Promise(resolve => {
      $nobyda.post({
        url: 'https://cgame-stadium.jd.com/api/v1/sign',
        headers: {
          Cookie: KEY,
          ActivityId: ActId
        }
      }, (error, response, data) => {
        try {
          if (error) throw new Error(error);
          const Details = LogDetails ? "response:\n" + data : '';
          const cc = JSON.parse(data);
          if (cc.status === true) {
            console.log(`\n�����̳�-����ǩ���ɹ� ${Details}`);
            merge.JDBuyCar.success = 1;
            merge.JDBuyCar.bean = cc.data && cc.data.beanNum ? cc.data.beanNum : 0
            merge.JDBuyCar.notify = `�����̳�-����: �ɹ�, ��ϸ: ${merge.JDBuyCar.bean||`��`}���� ??`;
          } else {
            console.log(`\n�����̳�-����ǩ��ʧ�� ${Details}`);
            merge.JDBuyCar.fail = 1;
            merge.JDBuyCar.notify = `�����̳�-����: ʧ��, ${cc.error&&cc.error.msg?cc.error.msg:`ԭ��: δ֪`} ??`;
          }
        } catch (eor) {
          $nobyda.AnError("��������-ǩ��", "JDBuyCar", eor, response, data);
        } finally {
          resolve();
        }
      })
    })
  }, () => {});
}

function TotalSteel() {
  merge.TotalSteel = {};
  return new Promise(resolve => {
    if (disable("TSteel")) return resolve()
    $nobyda.get({
      url: 'https://coin.jd.com/m/gb/getBaseInfo.html',
      headers: {
        Cookie: KEY
      }
    }, (error, response, data) => {
      try {
        if (error) throw new Error(error);
        const Details = LogDetails ? "response:\n" + data : '';
        if (data.match(/(\"gbBalance\":\d+)/)) {
          console.log("\n" + "����-�ܸ��G��ѯ�ɹ� " + Details)
          const cc = JSON.parse(data)
          merge.TotalSteel.TSteel = cc.gbBalance
        } else {
          console.log("\n" + "����-�ܸ��G��ѯʧ�� " + Details)
        }
      } catch (eor) {
        $nobyda.AnError("�˻����G-��ѯ", "TotalSteel", eor, response, data)
      } finally {
        resolve()
      }
    })
    if (out) setTimeout(resolve, out)
  });
}

function TotalBean() {
  merge.TotalBean = {};
  return new Promise(resolve => {
    if (disable("Qbear")) return resolve()
    $nobyda.get({
      url: 'https://me-api.jd.com/user_new/info/GetJDUserInfoUnion',
      headers: {
        Cookie: KEY
      }
    }, (error, response, data) => {
      try {
        if (error) throw new Error(error);
        const Details = LogDetails ? "response:\n" + data : '';
        const cc = JSON.parse(data)
        if (cc.msg == 'success' && cc.retcode == 0) {
          merge.TotalBean.nickname = cc.data.userInfo.baseInfo.nickname || ""
          merge.TotalBean.Qbear = cc.data.assetInfo.beanNum || 0
          $nobyda.headUrl = cc.data.userInfo.baseInfo.headImageUrl || ""
          console.log(`\n����-�ܾ�����ѯ�ɹ� ${Details}`)
        } else {
          merge.TotalBean.nickname = cc.retcode == 1001 ? "CookieʧЧ ??" : "";
          console.log(`\n����-�ܾ�����ѯʧ�� ${Details}`)
        }
      } catch (eor) {
        $nobyda.AnError("�˻�����-��ѯ", "TotalBean", eor, response, data)
      } finally {
        resolve()
      }
    })
    if (out) setTimeout(resolve, out)
  });
}

function TotalCash() {
  merge.TotalCash = {};
  return new Promise(resolve => {
    if (disable("TCash")) return resolve()
    $nobyda.post({
      url: 'https://api.m.jd.com/client.action?functionId=myhongbao_balance',
      headers: {
        Cookie: KEY
      },
      body: "body=%7B%22fp%22%3A%22-1%22%2C%22appToken%22%3A%22apphongbao_token%22%2C%22childActivityUrl%22%3A%22-1%22%2C%22country%22%3A%22cn%22%2C%22openId%22%3A%22-1%22%2C%22childActivityId%22%3A%22-1%22%2C%22applicantErp%22%3A%22-1%22%2C%22platformId%22%3A%22appHongBao%22%2C%22isRvc%22%3A%22-1%22%2C%22orgType%22%3A%222%22%2C%22activityType%22%3A%221%22%2C%22shshshfpb%22%3A%22-1%22%2C%22platformToken%22%3A%22apphongbao_token%22%2C%22organization%22%3A%22JD%22%2C%22pageClickKey%22%3A%22-1%22%2C%22platform%22%3A%221%22%2C%22eid%22%3A%22-1%22%2C%22appId%22%3A%22appHongBao%22%2C%22childActiveName%22%3A%22-1%22%2C%22shshshfp%22%3A%22-1%22%2C%22jda%22%3A%22-1%22%2C%22extend%22%3A%22-1%22%2C%22shshshfpa%22%3A%22-1%22%2C%22activityArea%22%3A%22-1%22%2C%22childActivityTime%22%3A%22-1%22%7D&client=apple&clientVersion=8.5.0&d_brand=apple&networklibtype=JDNetworkBaseAF&openudid=1fce88cd05c42fe2b054e846f11bdf33f016d676&sign=fdc04c3ab0ee9148f947d24fb087b55d&st=1581245397648&sv=120"
    }, (error, response, data) => {
      try {
        if (error) throw new Error(error);
        const Details = LogDetails ? "response:\n" + data : '';
        if (data.match(/(\"totalBalance\":\d+)/)) {
          console.log("\n" + "����-�ܺ����ѯ�ɹ� " + Details)
          const cc = JSON.parse(data)
          merge.TotalCash.TCash = cc.totalBalance
        } else {
          console.log("\n" + "����-�ܺ����ѯʧ�� " + Details)
        }
      } catch (eor) {
        $nobyda.AnError("�˻����-��ѯ", "TotalCash", eor, response, data)
      } finally {
        resolve()
      }
    })
    if (out) setTimeout(resolve, out)
  });
}

function TotalSubsidy() {
  merge.TotalSubsidy = {};
  return new Promise(resolve => {
    if (disable("TotalSubsidy")) return resolve()
    $nobyda.get({
      url: 'https://ms.jr.jd.com/gw/generic/uc/h5/m/mySubsidyBalance',
      headers: {
        Cookie: KEY,
        Referer: 'https://active.jd.com/forever/cashback/index?channellv=wojingqb'
      }
    }, (error, response, data) => {
      try {
        if (error) throw new Error(error);
        const cc = JSON.parse(data)
        const Details = LogDetails ? "response:\n" + data : '';
        if (cc.resultCode == 0 && cc.resultData && cc.resultData.data) {
          console.log("\n����-�ܽ�����ѯ�ɹ� " + Details)
          merge.TotalSubsidy.TSubsidy = cc.resultData.data.balance || 0
        } else {
          console.log("\n����-�ܽ�����ѯʧ�� " + Details)
        }
      } catch (eor) {
        $nobyda.AnError("�˻�����-��ѯ", "TotalSubsidy", eor, response, data)
      } finally {
        resolve()
      }
    })
    if (out) setTimeout(resolve, out)
  });
}

function TotalMoney() {
  merge.TotalMoney = {};
  return new Promise(resolve => {
    if (disable("TotalMoney")) return resolve()
    $nobyda.get({
      url: 'https://api.m.jd.com/client.action?functionId=cash_exchangePage&body=%7B%7D&build=167398&client=apple&clientVersion=9.1.9&openudid=1fce88cd05c42fe2b054e846f11bdf33f016d676&sign=762a8e894dea8cbfd91cce4dd5714bc5&st=1602179446935&sv=102',
      headers: {
        Cookie: KEY
      }
    }, (error, response, data) => {
      try {
        if (error) throw new Error(error);
        const cc = JSON.parse(data)
        const Details = LogDetails ? "response:\n" + data : '';
        if (cc.code == 0 && cc.data && cc.data.bizCode == 0 && cc.data.result) {
          console.log("\n����-���ֽ��ѯ�ɹ� " + Details)
          merge.TotalMoney.TMoney = cc.data.result.totalMoney || 0
        } else {
          console.log("\n����-���ֽ��ѯʧ�� " + Details)
        }
      } catch (eor) {
        $nobyda.AnError("�˻��ֽ�-��ѯ", "TotalMoney", eor, response, data)
      } finally {
        resolve()
      }
    })
    if (out) setTimeout(resolve, out)
  });
}

function disable(Val, name, way) {
  const read = $nobyda.read("JD_DailyBonusDisables")
  const annal = $nobyda.read("JD_Crash_" + Val)
  if (annal && way == 1 && boxdis) {
    var Crash = $nobyda.write("", "JD_Crash_" + Val)
    if (read) {
      if (read.indexOf(Val) == -1) {
        var Crash = $nobyda.write(`${read},${Val}`, "JD_DailyBonusDisables")
        console.log(`\n${name}-�����Զ����� ??`)
        merge[Val].notify = `${name}: ����, �����Զ����� ??`
        merge[Val].error = 1
        $nobyda.disable = 1
      }
    } else {
      var Crash = $nobyda.write(Val, "JD_DailyBonusDisables")
      console.log(`\n${name}-�����Զ����� ??`)
      merge[Val].notify = `${name}: ����, �����Զ����� ??`
      merge[Val].error = 1
      $nobyda.disable = 1
    }
    return true
  } else if (way == 1 && boxdis) {
    var Crash = $nobyda.write(name, "JD_Crash_" + Val)
  } else if (way == 2 && annal) {
    var Crash = $nobyda.write("", "JD_Crash_" + Val)
  }
  if (read && read.indexOf(Val) != -1) {
    return true
  } else {
    return false
  }
}

function Wait(readDelay, ini) {
  if (!readDelay || readDelay === '0') return 0
  if (typeof(readDelay) == 'string') {
    var readDelay = readDelay.replace(/"|��|'|��/g, ''); //prevent novice
    if (readDelay.indexOf('-') == -1) return parseInt(readDelay) || 0;
    const raw = readDelay.split("-").map(Number);
    const plan = parseInt(Math.random() * (raw[1] - raw[0] + 1) + raw[0], 10);
    if (ini) console.log(`\n��ʼ������ӳ�: ��С${raw[0]/1000}��, ���${raw[1]/1000}��`);
    // else console.log(`\nԤ�Ƶȴ�: ${(plan / 1000).toFixed(2)}��`);
    return ini ? readDelay : plan
  } else if (typeof(readDelay) == 'number') {
    return readDelay > 0 ? readDelay : 0
  } else return 0
}

function GetCookie() {
  try {
    if ($request.method != 'OPTIONS' && $request.headers && $request.url !== 'http://www.apple.com/') {
      let acObj = {};
      // ��ȡck����
      let CV = ($request.headers['Cookie'] || $request.headers['cookie'] || '').replace(/ /g, '');
      let ckItems = CV.split(';').filter(s => /^(pt_key|pt_pin)=.+/.test(s)).sort();
      if (ckItems.length == 2) {
        acObj.cookie = ckItems.join(';') + ';';
        acObj.userName = decodeURIComponent(acObj.cookie.match(/pt_pin=(.+?);/)[1]);
      }
      // ��cookie���ݽ�����ʾ����ck���ݣ��ҵ��˺�λ���д洢
      if (!acObj.cookie) {
        $nobyda.notify("д�뾩��Cookieʧ��", "", "��鿴�ű���˵��, ��¼��ҳ��ȡ ??")
        return
      } else {
        const allCk = [$nobyda.read('CookieJD'), $nobyda.read('CookieJD2')];
        const ocks = $nobyda.read('CookiesJD');
        let oldCks = [];
        try {
          oldCks = (ocks && JSON.parse(ocks)) || [];
        } catch (e) {
          console.log(`д�뾩��Cookieʱת��������չ�˺�����CookiesJD�쳣����չ�˺���Ϣ��\n${ocks}`)
          oldCks = [];
        }
        oldCks.forEach(item => allCk.push(item.cookie));
        let [status, seatNo] = chooseSeatNo(acObj.cookie, allCk, /pt_pin=(.+?);/);
        if (status) {
          if (status > 0) {
            let WT = '';
            if (seatNo < 2) {
              WT = $nobyda.write(acObj.cookie, `CookieJD${seatNo?seatNo+1:''}`);
            } else {
              if (oldCks.length <= seatNo - 2) {
                oldCks.push(acObj);
              } else {
                oldCks[seatNo - 2] = acObj;
              }
              WT = $nobyda.write(JSON.stringify(oldCks, null, 2), 'CookiesJD');
            }
            $nobyda.notify(`�û���: ${acObj.userName}`, ``, `${status==2?`����`:`д��`}���� [�˺�${seatNo+1}] Cookie${WT?`�ɹ� ??`:`ʧ�� ??`}`)
          } else {
            console.log(`\n�û���: ${acObj.userName}\n����ʷ���� [�˺�${seatNo+1}] Cookie��ͬ, ����д�� ??`)
          }
        }
      }
    } else if ($request.url === 'http://www.apple.com/') {
      $nobyda.notify("����ǩ��", "", "���ʹ���, �ֶ�������ѡ�������Ļ���ΪCron ??");
    } else {
      $nobyda.notify("����ǩ��", "д��Cookieʧ��", "����ƥ��URL�������ڽű����� ??");
    }
  } catch (eor) {
    $nobyda.write("", "CookieJD")
    $nobyda.write("", "CookieJD2")
    $nobyda.write("", "CookiesJD")
    $nobyda.notify("д�뾩��Cookieʧ��", "", '�ѳ��������ʷCookie, ������ ??')
    console.log(`\nд�뾩��Cookie���ִ��� ??\n${JSON.stringify(eor)}\n\n${eor}\n\n${JSON.stringify($request.headers)}\n`)
  } finally {
    $nobyda.done()
  }
}
// ��ȡ��ck���λ��
function chooseSeatNo(newCk, allCk, reg) {
  // status-��ȡ����״̬-0:�쳣��1-������2-���¡�-1-��ͬ seatNo-�洢λ�ã�Ĭ����ӵ������
  let [status, seatNo] = [1, allCk.length];
  try {
    let newId = ((newCk || '').match(reg) || ['', ''])[1];
    for (let i = 0, len = allCk.length; i < len; i++) {
      let oldId = ((allCk[i] || '').match(reg) || ['', ''])[1];
      if (oldId) {
        // �˺�λ���ݴ��ڣ��ж��Ƿ�Ϊ��ǰ�˺ŵ����ݣ������������������������ݲ�����ѭ��
        if (oldId == newId) {
          seatNo = i;
          status = newCk == allCk[i] ? -1 : 2;
          break;
        }
      } else if (seatNo == len) {
        // ��cookie��Ч���ڳ�ʼ�˺�λ���ȱ����cookie���ݴ洢�ڴ�λ��
        seatNo = i;
        status = 1;
      }
    }
  } catch (e) {
    // �쳣ʱ��������cookie
    status = 0;
    console.log(`\n��ѯ�˺Ŵ洢λ���쳣 ??\n${JSON.stringify(e)}\n\n${e}\n`)
  }
  return [status, seatNo];
}

// Modified from yichahucha
function nobyda() {
  const start = Date.now()
  const isRequest = typeof $request != "undefined"
  const isSurge = typeof $httpClient != "undefined"
  const isQuanX = typeof $task != "undefined"
  const isLoon = typeof $loon != "undefined"
  const isJSBox = typeof $app != "undefined" && typeof $http != "undefined"
  const isNode = typeof require == "function" && !isJSBox;
  const NodeSet = 'CookieSet.json'
  const node = (() => {
    if (isNode) {
      const request = require('request');
      const fs = require("fs");
      return ({
        request,
        fs
      })
    } else {
      return (null)
    }
  })()
  const notify = (title, subtitle, message, rawopts) => {
    const Opts = (rawopts) => { //Modified from https://github.com/chavyleung/scripts/blob/master/Env.js
      if (!rawopts) return rawopts
      if (typeof rawopts === 'string') {
        if (isLoon) return rawopts
        else if (isQuanX) return {
          'open-url': rawopts
        }
        else if (isSurge) return {
          url: rawopts
        }
        else return undefined
      } else if (typeof rawopts === 'object') {
        if (isLoon) {
          let openUrl = rawopts.openUrl || rawopts.url || rawopts['open-url']
          let mediaUrl = rawopts.mediaUrl || rawopts['media-url']
          return {
            openUrl,
            mediaUrl
          }
        } else if (isQuanX) {
          let openUrl = rawopts['open-url'] || rawopts.url || rawopts.openUrl
          let mediaUrl = rawopts['media-url'] || rawopts.mediaUrl
          return {
            'open-url': openUrl,
            'media-url': mediaUrl
          }
        } else if (isSurge) {
          let openUrl = rawopts.url || rawopts.openUrl || rawopts['open-url']
          return {
            url: openUrl
          }
        }
      } else {
        return undefined
      }
    }
    console.log(`${title}\n${subtitle}\n${message}`)
    if (isQuanX) $notify(title, subtitle, message, Opts(rawopts))
    if (isSurge) $notification.post(title, subtitle, message, Opts(rawopts))
    if (isJSBox) $push.schedule({
      title: title,
      body: subtitle ? subtitle + "\n" + message : message
    })
  }
  const write = (value, key) => {
    if (isQuanX) return $prefs.setValueForKey(value, key)
    if (isSurge) return $persistentStore.write(value, key)
    if (isNode) {
      try {
        if (!node.fs.existsSync(NodeSet)) node.fs.writeFileSync(NodeSet, JSON.stringify({}));
        const dataValue = JSON.parse(node.fs.readFileSync(NodeSet));
        if (value) dataValue[key] = value;
        if (!value) delete dataValue[key];
        return node.fs.writeFileSync(NodeSet, JSON.stringify(dataValue));
      } catch (er) {
        return AnError('Node.js�־û�д��', null, er);
      }
    }
    if (isJSBox) {
      if (!value) return $file.delete(`shared://${key}.txt`);
      return $file.write({
        data: $data({
          string: value
        }),
        path: `shared://${key}.txt`
      })
    }
  }
  const read = (key) => {
    if (isQuanX) return $prefs.valueForKey(key)
    if (isSurge) return $persistentStore.read(key)
    if (isNode) {
      try {
        if (!node.fs.existsSync(NodeSet)) return null;
        const dataValue = JSON.parse(node.fs.readFileSync(NodeSet))
        return dataValue[key]
      } catch (er) {
        return AnError('Node.js�־û���ȡ', null, er)
      }
    }
    if (isJSBox) {
      if (!$file.exists(`shared://${key}.txt`)) return null;
      return $file.read(`shared://${key}.txt`).string
    }
  }
  const adapterStatus = (response) => {
    if (response) {
      if (response.status) {
        response["statusCode"] = response.status
      } else if (response.statusCode) {
        response["status"] = response.statusCode
      }
    }
    return response
  }
  const get = (options, callback) => {
    options.headers['User-Agent'] = 'JD4iPhone/167169 (iPhone; iOS 13.4.1; Scale/3.00)'
    if (isQuanX) {
      if (typeof options == "string") options = {
        url: options
      }
      options["method"] = "GET"
      //options["opts"] = {
      //  "hints": false
      //}
      $task.fetch(options).then(response => {
        callback(null, adapterStatus(response), response.body)
      }, reason => callback(reason.error, null, null))
    }
    if (isSurge) {
      options.headers['X-Surge-Skip-Scripting'] = false
      $httpClient.get(options, (error, response, body) => {
        callback(error, adapterStatus(response), body)
      })
    }
    if (isNode) {
      node.request(options, (error, response, body) => {
        callback(error, adapterStatus(response), body)
      })
    }
    if (isJSBox) {
      if (typeof options == "string") options = {
        url: options
      }
      options["header"] = options["headers"]
      options["handler"] = function(resp) {
        let error = resp.error;
        if (error) error = JSON.stringify(resp.error)
        let body = resp.data;
        if (typeof body == "object") body = JSON.stringify(resp.data);
        callback(error, adapterStatus(resp.response), body)
      };
      $http.get(options);
    }
  }
  const post = (options, callback) => {
    options.headers['User-Agent'] = 'JD4iPhone/167169 (iPhone; iOS 13.4.1; Scale/3.00)'
    if (options.body) options.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    if (isQuanX) {
      if (typeof options == "string") options = {
        url: options
      }
      options["method"] = "POST"
      //options["opts"] = {
      //  "hints": false
      //}
      $task.fetch(options).then(response => {
        callback(null, adapterStatus(response), response.body)
      }, reason => callback(reason.error, null, null))
    }
    if (isSurge) {
      options.headers['X-Surge-Skip-Scripting'] = false
      $httpClient.post(options, (error, response, body) => {
        callback(error, adapterStatus(response), body)
      })
    }
    if (isNode) {
      node.request.post(options, (error, response, body) => {
        callback(error, adapterStatus(response), body)
      })
    }
    if (isJSBox) {
      if (typeof options == "string") options = {
        url: options
      }
      options["header"] = options["headers"]
      options["handler"] = function(resp) {
        let error = resp.error;
        if (error) error = JSON.stringify(resp.error)
        let body = resp.data;
        if (typeof body == "object") body = JSON.stringify(resp.data)
        callback(error, adapterStatus(resp.response), body)
      }
      $http.post(options);
    }
  }
  const AnError = (name, keyname, er, resp, body) => {
    if (typeof(merge) != "undefined" && keyname) {
      if (!merge[keyname].notify) {
        merge[keyname].notify = `${name}: �쳣, �������־ ??`
      } else {
        merge[keyname].notify += `\n${name}: �쳣, �������־ ?? (2)`
      }
      merge[keyname].error = 1
    }
    return console.log(`\n??${name}��������\n??����: ${er.name}\n??����: ${er.message}${JSON.stringify(er).match(/\"line\"/)?`\n??����: ${JSON.stringify(er)}`:``}${resp&&resp.status?`\n??״̬: ${resp.status}`:``}${body?`\n??��Ӧ: ${resp&&resp.status!=503?body:`Omit.`}`:``}`)
  }
  const time = () => {
    const end = ((Date.now() - start) / 1000).toFixed(2)
    return console.log('\nǩ����ʱ: ' + end + ' ��')
  }
  const done = (value = {}) => {
    if (isQuanX) return $done(value)
    if (isSurge) isRequest ? $done(value) : $done()
  }
  return {
    AnError,
    isRequest,
    isJSBox,
    isSurge,
    isQuanX,
    isLoon,
    isNode,
    notify,
    write,
    read,
    get,
    post,
    time,
    done
  }
};
ReadCookie();
