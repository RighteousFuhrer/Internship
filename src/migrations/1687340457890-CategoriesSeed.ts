import { Category } from 'src/modules/sales/entities/category.entity';

import type { CreateCategoryDto } from 'src/modules/sales/dtos/CreateCategory.dto';
import type { MigrationInterface, QueryRunner } from 'typeorm';

export class CategoriesSeed1687340457890 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    const categories: CreateCategoryDto[] = [
      {
        name: 'Accessories',
        image: Buffer.from(`/9j/4AAQSkZJRgABAQAAAQABAAD/
            2wCEAAkGBw8ODQ0NDQ8PDQ0PDQ0NDQ0NDw8NDg0PFREWFhYRFRUYHiggGBomGxUXIjEhJiorLi4uFx8zODMwNyotLisBCgoK
            Dg0OGhAQGi0lHR0tLS0rLS0tLS0tLS0tMC0tLSstLS0tLS0tLS0rLS0tLS0tLS0tKy0tLS0rLS0rLi0rK//
            AABEIASsAqAMBIgACEQEDEQH/xAAbAAEBAAMBAQEAAAAAAAAAAAAAAQIFBgMEB//
            EAEoQAAEDAgMEBQYJCQYHAAAAAAEAAgMEEQUSIQYxQVETImFxkQcUMlKBoRczQlOUscHR0hYkQ2OSlcLD8BU1YnKC0yNFVXO
            EorP/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EACERAQEBAAEDBQEBAAAAAAAAAAABETECEiEDM0FRYTIi/
            9oADAMBAAIRAxEAPwD9jVREBERARAiCqIiAiIgIiIKEREBERAKiqiAiIgIiICIiAiIgqiIgIiICKogiKogioREBERAREQFFU
            QRERARFUERVRAVUVQEREBERAREQERVBERWyCKoiCIqiCKKogiqiqAiIgIiqCIqiCIqlkERVEBERAREQEREBERBEREBFUQERV
            BEVsiCKqogiKogiK2RBFFkogiKogiiqIIiKICIUQZKqIgqqiIKiIgqIvOeYMFzqeA5lBlJIGi7jYfX3LWVeMsj5DsOrvuC8X
            uknflZzs+S12RDl39i+6jwuGLUNL3m13ydYkjiBuHsWNt4ayTlqTjkpBLI3lt7XtxvbgEGPSN+Mje3hcgb
            +Wuq6TMeah1FjqOR1Cdt+17p9NZR41FJpezuR0PgVsgQdRqFra7BIZRoOjfrZzN1+0cu6y10FVLRyCKc5oz6Em/S/H
            +uPBNs5Ml4dGoox4cARqCslthFFVEEREQREKIKiiqCpdReU1Q1haHHrOvlHO29B73S618lW4nq6W4cD2FfbC7O0OaDY8OIPE
            KS6uMamqjiDXSvawOe2NmZwaZJHeixt97jwC1z888mX0fXPzbeQ7Vxe39KJcQeyrydA6lijp
            +mLwxuYnpGNLQS15Iv6NnWaL9Wy7jZrDJaWip4J5H1E7Ix0szyXOc71c29wb6IJ1IFypzcXiNhEwMaGNFmgWA
            +3vWV1cp5HwUynkfBaZLpdMp5HwTKeR8EC68qqnZKwxyC7T7bG29euU8j4JlPI+CDRYZM+nlNNNqNejdfRze/w/
            q63l1qNqKOZ9LI+mLI6mJpkhkmaXRtI35hx056a6rl/J5X10lVLHPI6aF9O2olZK+J81FOWx2Y/
            K4lpdmd1SGfFus0ALE8XG758u/
            updXKeR8FiR7FtgS6iICKIgzREQFp9qqR0lP0sdxLTO6dhb6RaB1wOenWA4lgW4XjVVscADpXiMHc4h1ieVwN/
            ZvKl4WctXhtSJomybidHtG4O427DoR2OB4rWY1szR1c7ZqmIuf0YYHNkliNgSbdRwvvOp5hfVT9HFV9FDYQTQsMQZ6AcwDKG
            98bm+yJbaSDq34gi3jZc2nI/kJh/qT7raVlaNNLj4zj9vYvQbFUXOr/eFfru/W9/iuiCqarnBsVRc6z2YhXj+b3+Ko2Lo/
            WrP3hX9n6zv8V0SK7THPt2OpB8ut/eNeOX63v8Vm3ZKl+cruH/ADLEBy/W9/it6rZNpjRjZSmH6Wv9mJ4iP5vf4rMbL0/
            z1f8AvTEv91boK2TTGl/Jen+dryORxPEiLcvjVjTbI0UWbofOYS62YxVtbGX2vbNlkGbfx7ea3gVCaNX+TlMd76w9+I4gf5q
            +qiphSyRxQ9I9kmknnFVUTlgFzmZ0jna62tp7l9YK+EYjG
            +vhp2kmQRSyGwOUBj2tcCfWu8abxreysqN2osi0jeLKLbCIhRBmiiqAuT2qc6asp4Gvdlip5JHRAua2eWZ4ijbfmLOPGy6ma
            ZsbS95ysaLuceA5rjWulqK2nkqozTx9LG0sAecsvSOdGxxeBfMRfq30tcDeuPrXxn26enzrT1b3YbFROlcC6PFg2Z9y5rI39
            MH2zcAwkcu4aL9KfqCDpcWO/S48V+f
            +UOBshhicOrJi1Gx3aHZwfcSuowOsfNRUkkgtK6niMoG4SZRnH7V1qeJhfPlnHK1xeA5pLHBrwHNORxAcGutuOVzT3ELO45j
            xC4/a3Bppa0z05fG98MbXSxSvhkOUuGUuaQSLWWnGz+JcKutHdiNYP41jua7fHL9JBCL8prqbEqYg
            +e1rXa5DJVz1MZPayRzmu7iF+j4FiPndJBUWyuey0jLk9HK05ZGXOps4Gx4jKeKsupZjYBZBeUjiGksbndoGtvlBJO8ngOa
            +TDxMx72yOMwLuu7qgxS5Q645sINgN4yt5lNRsbKHh7u1UFcVtdDWVs4ZSvkipYrtcY5XQmeb5Vy3VzW7rHTMX6XAVWTXa2P
            9e37j4I7qgudoGgkk6Ad5OgX5c3ZGp+USed5HlbLB9iGF4kqmtcGG7WWzXPMkrPcvb+ugmr5K0mOjcYqa5Ela27XSDcWwHh/
            3P2eDlrMcYaaSXzZzYTTYBUmF7i5rIrTg5iRqB1OGq6qNgaA1oAA0AGgC001K2fE5oH3ySYVDG7KbODX1MlyDz09y1GdfZst
            RPZLLMyaOWldBGwCKCOJklSTnlnY5oAc0l2XcfQGq6NRjQ0BrQGtaA1oGgACq6SZGLfKFVRFUZKqKoOM8puKujp4sPhA6fEG
            1EfSOJa2mga0CSbTe4FzQG8SVpdlQ1+J0rJZpXtYZJImOe6Rr52Ruyl1+Tc5v96
            +zb03xagB3R4bWvB4Avnhb9TSvn2IbnxRp+bhqJO7QM/jXDr/uO/RP8Wvbbp35zSDh/bFH7o3lbvZgZaeSO9
            +jrK5tuQdUPkaP2XhaDbZ355RjnjEPugkP2Ld7OuPSYi3gK1rh/qpKc/XdX5Z+GymHW9igVn9Idx
            +tYhBrdo6XpYDYXc3rD2LksLxOahe8xNbLFI5rpYHksu4C2djtcrrADcQQ0A2sCO
            +e24sucxTBdS6PvLeBWbvMa6c4rb4TtBTVVmxvyTZS408tmTNA3nLucBxLSRrvWxkkZG18jyyNo68sji1jRawzPPYABc8l
            +bVNBmOVzLkODgCLkOBuHDkQeIWzpMBmqMnnMk0jGWyNmlkmItx6xPW/xekeaTqL0frfR43528w0d
            +jHxtW5nVA4iNjh13drhlGhs7ctrFG1rQ1os1osLkuPeSdSeZOpOpXhRUjIWBjAAOxfStM3PhUUVCIyC1lF/fcvZhlL/wDeo
            +5bMLW4f/fdT2YZQe+er+5WJXTKKourCIiIMkURBxW1+teRyoKb3zT/
            AHLX7CvDKyqltfJRTOtuvaRhtfhuWz2uFqxzjxoacD2TTfetLsZJ
            +dVjfWw6rI9jmfeuHV7j0dPttdthXTDEqIywlkTsRbOyZpzxEdE9uQusMrru3EC/C+q7HZ9wM9fbi+ld407R9i
            +WujbIHRyNbJG9tnse0PY8ciDoVnsnGGS4i1pcWsnp4hncXkWpYnWudSBnG+57VWbw3c+9vcViEqH9Zo/wu
            +sKAojJRzbqhVB83mbc2awuvoa0DQKooCqiKioooSiPRpWgfikNJi88s5cGvocNgaGNdI973VNS1rWsbq43dew1sCti
            +tuSyFpmeDZwaQ2Nh5PkOje4Xd2FeNHgrRU
            +fVGSatEZiie1mWOliuepEDqXG5u86m5sGg2Vg6gG4BG4gEcPcqo0WAHYAi6uYiIg8+lCdMF5GIrEtKDlfKCbPo5Rucyppj/
            m6kjfcyRcvgFT0VdFfRsrZ6cntkic1o/byrvdp8NdVUckcQBnY5k9OCQA6WM36Mk7g9uZl
            +GdfmU0RkjE0JdlBu11rPikafRcPkvaRqDuIXD1JnVr0end6bHcSuvk7QF67JuDoqmcbp6
            +qcO1sRFOD7ehv7VzP9ul8ELYAHV8lqeKn3Hzi3pEcI26uJ9ULr8Oo20lNDTtddkETIs7yAXECxe48yde8pGb9PpnibIesL2
            9EgkOaeJBGoXyh8kTmtf/AMSJxDRNoHscTYCRu7U2GYaXOoC+gVcI0MsZPHK8ON/Yvlq6uM53RiSR/
            RPYAxgAcdS3rOtx9mqElbAFXMuUZjOI2F8LN+NqyA29y9hjFZxw6Qdonjdf3IY6XMmZc1/bVX/02fvEsZ+xU47Ujfh1V/
            ps63uQx0uZLrmfyhn44dWjtEZP2KHaSQC5oK8a2+IJ9qpje1taIsjQ10kshLYoYwC+QgXO+wDQN7iQBprqFg2me/
            WoeLfMwlwjHY5+jn/+o5grS4Rjccz6iWeOopXXjgjbU08rD0LesXNLQRZzjz+QLhb
            +Gqjf6EjH9jXNJ8ETHvE0NAa0BrWizWtAa1o5ADQL2avINPIr6IG3LR2hIlbEqKouzmiIiCqWVRB5StHJcrjWx1PVyvqGyT0
            dQ8deajeIjKRuMjSC157SLrq3hYhqDgKDyfSQSPkhxSdkjxldL5tTvmLfVzuvYdwG5ffW7CR1ULYa6trqtjXZrGSOBpdwLmx
            tFyOF9y6/KsgFMjW1wTfJVhY+TVH/AMuUfUvZnkywsfo6k99ZUj6nLt7JZMTXF/BthfzVR9Nqvxp8G+GfN1H02r/
            GuzyplTDXGfBxhnzdT9NqvxJ8HGG+pVfTar8S7PKmVMNrjPg5w31av6dVfiUPk5w48Kz6dU/iXaZUypi7XD/Brh/
            B1cO6tmXm/wAmNCf02IjurXH6wu8yplTDa4WHybwRm8Vfi8X+Sut/
            AurwXDfNWFnTVFQTa8lVKZpPsA9gX32VATE16IiKoiKogqKIghUsslEEspZZIgiKogxsiyRBiiqIqKoiAlkRERVEQZIoiBdE
            RBUREBERBEVRAUVRBESyICIiAoqiCIrZRAREQEREBERBkiIgWRVEEVREBRVLIIiJZAUsrZLIJZLKqICJZWyCIqogiKogiIiD
            JERBUUVQEREBERAREQRFUQRFVEBERARFEBEQoIiIgqqiIKiiqAqoiCooiCooiBdERAREQEURAREQFERARFEFVURBUUVQVFEQ
            VFECAiIgXREQEREBERBEREBERBEREH//2Q==`),
      },
    ];

    for (let i = 0; i < categories.length; i++) {
      await queryRunner.manager.save(
        queryRunner.manager.create<Category>(Category, categories[i]),
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.delete(Category, {});
  }

}
