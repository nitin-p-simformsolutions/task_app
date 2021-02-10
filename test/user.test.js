const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/user');
const { setUpDatabase, userOne, userOneId } = require('./fixtures/db');

beforeEach(setUpDatabase)

test('signup new user', async ()=>{
    const response = await request(app).post('/users').send({
        name:'yuvaan',
        email:'yuva@example.com',
        password: 'yuvaan@123'
    }).expect(200)

    //Assert that the database was changed correctly
    const user = await User.findById(response.body.user._id)
    expect(user).not.toBeNull();

    //Assertion above the response
    expect(response.body).toMatchObject({
        user: {
            name:'yuvaan',
            email:'yuva@example.com',
        },
        token: user.tokens[0].token
    })
    expect(user.password).not.toBe('yuvaan@123')
})

test('login existing user', async ()=>{
    const response = await request(app).post('/users/login').send({
        email: 'nitin1@example.com',
        password: 'nitin@123'
    }).expect(200)
    const user = await User.findById(userOneId);
    expect(response.body.token).toBe(user.tokens[1].token)
})

test('login failure', async () => {
    await request(app).post('/users/login').send({
        email : 'abc@example.com',
        password: 'nitin@123'
    }).expect(400)
})


test('get user profile', async ()=>{
    await request(app)
    .get('/users/me')
    .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);
})

test('should not get user profile for unauthenticated user', async ()=>{
    await request(app)
    .get('/users/me')
    .send()
    .expect(401);
})

test('should delete account', async ()=>{
    const response = await request(app)
    .delete('/users/me')
    .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200)

    const user = await User.findById(userOneId);
    expect(user).toBeNull()
})

test('should not delete user profile for unauthenticated user', async ()=>{
    await request(app)
    .delete('/users/me')
    .send()
    .expect(401);
})

test('should upload avatar image', async ()=>{
    await request(app)
    .post('/users/me/avatar')
    .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
    .attach('avatar','test/fixtures/profile-pic.jpg')
    .expect(200)

    const user =await User.findById(userOneId)
    expect(user.avatar).toEqual(expect.any(Buffer))
})

test('should update valid user', async ()=>{
    const response =await request(app)
    .patch('/users/me')
    .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
    .send({
        name:'daksh' 
    })
    .expect(200)
    const user = await User.findById(userOneId)
    expect(user.name).toBe('daksh')
})

test('should not update for invalid user', async ()=>{
    const response =await request(app)
    .patch('/users/me')
    .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
    .send({
        location:'india' 
    })
    .expect(400)
})