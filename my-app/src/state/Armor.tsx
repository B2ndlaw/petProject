import { v1 } from "uuid"

type ArmorPartType = {
    title: string,
    protection: number,
    id: string
}



export type ArmorType = [
    {head: ArmorPartType},
    {chest: ArmorPartType},
    {groin: ArmorPartType},
    {legs: ArmorPartType}
  ]

  const HeadArmorDemo: ArmorPartType = {
    title: "шапка",
    protection: 2,
    id: v1()

  }

  const ChestArmorDemo: ArmorPartType = {
    title: "нагрудник",
    protection: 2,
    id: v1()

  }

  const GroinArmorDemo: ArmorPartType = {
    title: "гульфик",
    protection: 2,
    id: v1()

  }
  const LegsArmorDemo: ArmorPartType = {
    title: "сапоги",
    protection: 2,
    id: v1()

  }

export const ArmorDemo: ArmorType = [
   {head: HeadArmorDemo},
   {chest: ChestArmorDemo},
   {groin: GroinArmorDemo},
   {legs: LegsArmorDemo}
]


