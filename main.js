
const show = () => {
    const team = document.getElementById('team_page')
    const contact = document.getElementById('contact_page')
    const about = document.getElementById('about')


    about.style.display = 'grid'
    team.style.display = 'none'
    contact.style.display = 'none'
}

const contact_page = () => {
    const team = document.getElementById('team_page')
    const contact = document.getElementById('contact_page')
    const about = document.getElementById('about')

    console.log('contact page')
    about.style.display = 'none'
    team.style.display = 'none'
    contact.style.display = 'grid'


}

const Team_page = () => {
    const team = document.getElementById('team_page')
    const contact = document.getElementById('contact_page')
    const about = document.getElementById('about')



    console.log('team page')
    team.style.display = 'table'
    about.style.display = 'none'
    contact.style.display = 'none'


}
