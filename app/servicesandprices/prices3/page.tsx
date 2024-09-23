import React from 'react'
import styles from './page.module.css'
import Card2 from '@/app/components/Card2/Card2'

function page() {
  return (
    <>
        <br/>
        <Card2 txt="ექსტრაქცია: 80₾ - 150₾"/>
        <br/>
        <Card2 txt="პულტიტი, პერიოდიტიტი: 90₾ - 150₾"/>
        <br/>
        <Card2 txt="სარძევე კბილის მარტივი ექსტრაქცია: 50₾ - 70₾"/>
        <br/>
        <Card2 txt="სიბრძნის კბილის ექსტრაქცია: 150₾ - 400₾"/>
        <br/>
    </>
  )
}

export default page