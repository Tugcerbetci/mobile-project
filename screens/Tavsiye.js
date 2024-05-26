import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const Tavsiye = () => {
  return (
    <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
      <View style={{ paddingHorizontal: 20 }}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>
            ŞEKER
          </Text>
          <Text style={styles.infoText}>
            Kan şekeri nedir?
            Karbonhidratların sindirilmesi sonucunda ortaya çıkan veya glikojen gibi depo kaynaklardan elde edilen glukozun kan dolaşımımızdaki düzeyine kan şekeri (plazma glukozu) denir. Birimi miligram/desilitre (mg/dl)’ dir.
            Açlık ve tokluk kan şekeri değeri kaç olmalıdır?
            Normal sağlıklı bir bireyde açlık kan şekeri 100 mg/dl’nin, ikinci saat tokluk kan şekeri ise 140 mg/dl’nin altındadır.
            Açlık kan şekeri nasıl ölçülür?
            Tanısal amaçlı ölçümlerde 8-10 saatlik gece açlığı sonrası venöz plazma örneği alınarak laboratuvarda açlık kan şekeri ölçülür. Takip amaçlı ölçümlerde ise birey parmak ucundan kendi kendine kapiller kan örneğinden kan şeker ölçüm cihazları ile açlık kan şekerini ölçebilir.
            Açlık kan şekerini düşürmek için ne yapılmalı?
            Diyabetik olmayan bir bireyde açlık kan şekeri yüksekliği prediyabet anlamına gelir ve bu bireylerin öncelikle yaşam tarzı değişikliği yapması gerekir. Basit karbonhidratlardan uzak durmak, düzenli fiziksel aktivite, düzenli uyku ve stresten uzak durmak bu değişikliklerin başında gelmektedir. Kilo fazlalığı varsa ideal kiloya düşmek prediyabetik bir bireyin açlık kan şekeri düzeylerinin normal aralığa gelmesini sağlayabilir.
            Diyabetik bir bireyde ise açlık kan şekeri yüksek seyrediyorsa buna uygun ilaç veya insülin tedavilerinin kendilerini takip eden hekimler tarafından düzenlenmesi gerekmektedir.
            Kan şekeri yükselince vücutta neler olur?
            Susuzluk hissi, ağız kuruluğu, sık idrara çıkma, görme bulanıklığı, yara iyileştirmesinde gecikme, ciltte kuruma ve kaşıntı, halsizlik, yorgunluk ve kilo kaybı kan şekerinin yükseldiğinin (hipergliseminin) belirtileridir. Kan şekeri yükselmesinin birçok nedeni olabilir.
            Yüksek Kan Şekeri Nasıl Düşürülür?
            Bol sıvı tüketmek.
            Brüksel lahanası, avokado, brokoli gibi lifli gıdalar tüketmek.
            Ekmek, makarna, şekerli ve gazlı içecekler gibi karbonhidratı bol gıdaları sınırlandırmak.
            Düzenli şeker ölçümü yapmak.
            Kalori alımını azaltmak için porsiyon kontrolü
            Egzersiz yapmak.
            Kiloyu dengelemek.
            Kan şekerinin düştüğü nasıl anlaşılır?
            Hafif derecedeki kan şekeri düşüklüğünde terleme olur. Terleme genelde boynun arka kısmında ve saç diplerinde görülebilir. Ayrıca sinirlilik, titreme, güçsüzlük, aşırı açlık, mide bulantısı, baş ağrısı, baş dönmesi, bulanık görme, endişeli hissetme ve kalp atım hızında artış gibi belirtiler görülebilmektedir.
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>
            TANSİYON
          </Text>
          <Text style={styles.infoText}>
            Yaşa göre tansiyon kaç olmalı?
            65 yaş altında 140/90 mmHg, 65 yaş üzerinde 150/90 mmHg değerini aşan ölçümler Hipertansiyon kabul edilir.
            Hipertansiyon nedir?
            Hipertansiyon, kalpten vücuda taşınan kanın atardamar duvarlarına uyguladığı kuvvetin, kalp hastalığı gibi sağlık sorunlarına neden olabilecek kadar yüksek olduğu yaygın bir tıbbi duruma verilen isimdir. Hipertansiyon aynı zamanda yüksek tansiyon adıyla da bilinir.
            Tansiyon ne kadar sıklıkla ölçülür?
            Tansiyonunuzu her gün aynı saatte, örneğin her sabah ve akşam aç karnına ve tansiyon ilaçlarını almadan önce ölçün.
            Tansiyonu Yükselten 10 Besin
            Yanlış Beslenme ve Tuzlu Diyetler.
            Aşırı Çay ve Kahve Tüketimi.
            Obezite.
            Diyabet.
            Hareketsiz Yaşam Şekli.
            Yetersiz Sıvı Alımı
            Alkol.
            Sigara.
            Hipertansiyonun Belirtileri Nelerdir?
            Hipertansiyon yıllarca kendini göstermeyebilir. Aşikar hale geldiğinde ise baş ağrısı, burun kanaması, kulaklarda çınlama, halsizlik, sık idrara çıkma ve bacaklarda şişlik şeklinde belirtiler verebilir. Bu belirtilerle birlikte tansiyon yüksekliği görüldüğünde mutlaka hekime başvurulmalıdır.
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>
            SU
          </Text>
          <Text style={styles.infoText}>
            SU İÇMENİN FAYDALARI
            Metabolizma ve sindirim sağlığı: Su içmek metabolizmanızı hızlandırabilir ve sindirim sisteminizin düzgün çalışmasını sağlar. Sindirim süreci için su gereklidir ve lifli gıdaların etkili bir şekilde sindirilmesine yardımcı olur.
            Kilo kontrolü: Su içmek tokluk hissini artırabilir ve böylece fazla yemek yeme isteğini azaltabilir. Kalorisi olmayan bir içecek olması nedeniyle su, kilo kontrolü veya kilo verme çabalarında da yardımcı olabilir.
            Cilt sağlığı: Yeterli miktarda su içmek, cildinizin nemlenmesine ve genç kalmasına yardımcı olabilir. Hidrasyon, ciltte kuruluk ve kırışıklıkları azaltabilir.
            Enerji seviyelerini artırma: Susuz kaldığınızda, vücudunuzun enerji seviyeleri düşebilir ve kendinizi yorgun hissedebilirsiniz. Yeterli su içmek, enerjinizi artırabilir ve günlük aktivitelerinizi daha verimli bir şekilde yapmanıza yardımcı olabilir.
            Böbrek sağlığı: Yeterli miktarda su içmek, böbreklerinizi temizleyerek ve idrar yolu enfeksiyonlarını önleyerek böbrek sağlığınızı destekler.
            NE KADAR SU İÇİLMELİ
            Birçok uzman, sağlıklı bir yetişkinin günde ortalama olarak 2 ila 3 litre su içmesini önermektedir. Bu miktar, yaklaşık olarak 8-10 bardak suya tekabül eder. Ancak, bu miktar, kişinin yaşam tarzına, çevresel koşullara ve fiziksel aktivite düzeyine bağlı olarak değişebilir.
            Egzersiz yapanlar: Egzersiz sırasında terleme yoluyla su kaybı artar. Bu nedenle egzersiz yapan bireylerin su tüketimini artırmaları önemlidir.
            Hamile ve emziren kadınlar: Hamilelik ve emzirme döneminde vücut daha fazla suya ihtiyaç duyar. Bu nedenle hamile ve emziren kadınlar, su tüketimini artırmalıdır.
            İklim koşulları: Sıcak ve nemli iklimlerde yaşayanlar, daha fazla su içmelidir. Yüksek sıcaklıklar, terleme yoluyla su kaybını artırır.
            Hastalık ve sağlık koşulları: Ateş, ishal, kusma gibi durumlar vücuttan su kaybını artırır. Bu tür durumlarla karşılaşıldığında su tüketimi artırılmalıdır.
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>
            SPOR
          </Text>
          <Text style={styles.infoText}>
            Spor yapmanın faydaları:
            • Spor yapmak, fiziksel sağlığı geliştirir, kasları güçlendirir ve kardiyovasküler sağlığı iyileştirir.
            • Egzersiz, kilo kontrolüne yardımcı olur ve obezite riskini azaltır.
            • Düzenli egzersiz, mental sağlığı iyileştirir, stres ve anksiyeteyi azaltır.
            • Spor yapmak, uyku kalitesini artırır ve uyku düzenini iyileştirir.
            • Egzersiz, bağışıklık sistemini güçlendirir ve hastalıklara karşı direnci artırır.
            • Spor, sosyal bağlantıları güçlendirir ve takım çalışmasını teşvik eder.
            • Düzenli egzersiz, enerji seviyelerini artırır ve günlük aktivitelerde daha fazla enerji sağlar.
            • Spor yapmak, disiplin ve öz-motivasyon geliştirir.
            • Egzersiz, yaşlanma sürecini yavaşlatır ve yaşam kalitesini artırır.
            • Spor, beyin fonksiyonlarını iyileştirir ve bilişsel yetenekleri artırır.
            • Egzersiz, kalp sağlığını korur ve kardiyovasküler hastalıkların riskini azaltır.
            • Spor yapmak, vücut esnekliğini ve hareket kabiliyetini artırır.
            • Egzersiz, depresyon belirtilerini hafifletir ve genel ruh halini iyileştirir.
            • Spor, endorfin salgısını artırır ve mutluluk hissi verir.
            • Egzersiz, kemik yoğunluğunu artırır ve osteoporoz riskini azaltır.
            • Düzenli spor, sağlıklı bir yaşam tarzını teşvik eder.
            • Egzersiz yapmak, sosyal becerileri geliştirir ve yeni insanlarla tanışma fırsatı sunar.
            • Spor, özgüveni artırır ve kişisel başarı hissi verir.
            • Düzenli egzersiz, kan basıncını düşürür ve kolesterol seviyelerini dengeler.
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>
            OBEZİTE
          </Text>
          <Text style={styles.infoText}>
            Obezite ile ilgili 20 önemli bilgi:
            • Obezite, vücutta aşırı yağ birikimi sonucu oluşan bir sağlık durumudur.
            • Obezite, kalp hastalıkları, diyabet, yüksek tansiyon, kanser gibi birçok ciddi sağlık sorununun riskini artırabilir.
            • Obezite, genellikle enerji alımı ile enerji harcaması arasındaki dengesizlikten kaynaklanır.
            • Obezite genellikle aşırı kalori alımı, düşük fiziksel aktivite düzeyi, genetik faktörler, hormonal dengesizlikler ve çevresel etmenler gibi birçok faktörün etkileşimiyle ortaya çıkar.
            • Vücut kitle indeksi (VKİ), obezitenin değerlendirilmesinde yaygın olarak kullanılan bir ölçümdür. VKİ, kişinin kilosunu, boyuna göre normal, kilolu, obez veya aşırı obez olarak sınıflandırır.
            • Obezite, çocukluk çağından itibaren gelişebilir ve ilerleyen yaşlarda sağlık sorunlarına yol açabilir.
            • Obezite, psikososyal etkiler de dahil olmak üzere bireyin yaşam kalitesini olumsuz etkileyebilir. Stigma, özsaygı eksikliği ve depresyon gibi psikolojik sorunlar obeziteyle ilişkilendirilebilir.
            • Obezite, ekonomik maliyetler açısından da büyük bir yük oluşturur. Obeziteye bağlı sağlık sorunlarının tedavisi ve kayıp iş gücü nedeniyle ekonomik kayıplar meydana gelebilir.
            • Obezite tedavisinde kilo verme, fiziksel aktivite artışı, sağlıklı beslenme alışkanlıkları edinme ve gerekirse tıbbi müdahale gibi stratejiler kullanılabilir.
            • Obezite cerrahisi, aşırı obeziteye sahip bireylerde kilo kaybını teşvik etmek için bir seçenek olabilir.
            • Obezite, uyku apnesi, astım, karaciğer yağlanması, polikistik over sendromu gibi birçok başka sağlık sorunuyla da ilişkilendirilebilir.
            • Obezite, kadınların fertilitesini etkileyebilir ve gebelik komplikasyonlarına yol açabilir.
            • Obezite, bel çevresi, kan basıncı, kan lipid profili ve kan şekeri gibi bir dizi biyokimyasal parametrede bozukluklara neden olabilir.
            • Obezite, inflamasyon, oksidatif stres ve insülin direnci gibi vücutta çeşitli patofizyolojik süreçlere yol açabilir.
            • Obezite, kalp hastalıkları, inme, böbrek hastalıkları ve bazı kanser türleri gibi ölümcül sonuçlara yol açabilir.
            • Obezite, kilo verme ve sağlıklı kiloyu koruma sürecinde uzun vadeli bir çaba gerektirir.
            • Obezite, çevresel faktörlerin etkisi altında olan birçok genetik yatkınlıkla etkileşebilir.
            • Obezite, çocukluk çağında gelişirse, erişkinlikte devam edebilir ve ilerleyen yaşlarda daha ciddi sağlık sorunlarına yol açabilir.
            • Obezite, sosyal ve kültürel faktörler, reklamcılık ve beslenme eğilimleri gibi birçok faktörün etkileşimiyle ortaya çıkan karmaşık bir sorundur.
            • Obeziteye karşı önlemler almak için sağlıklı beslenme, fiziksel aktivite, stres yönetimi ve düzenli sağlık kontrolleri gibi yaşam tarzı değişiklikleri yapılabilir.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = {
  infoContainer: {
    backgroundColor: '#3498db', // Mavi
    padding: 20,
    marginBottom: 20,
    borderRadius: 12,
    shadowColor: '#bdc3c7', // Gümüş
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  infoTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2c3e50', // Koyu Gri
  },
  infoText: {
    fontSize: 16,
    color: '#ecf0f1', // Açık Gri
    lineHeight: 24,
  },
};

export default Tavsiye;
