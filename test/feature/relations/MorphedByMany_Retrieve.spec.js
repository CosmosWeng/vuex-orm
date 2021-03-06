import { createStore } from 'test/support/Helpers'
import Model from 'app/model/Model'

describe('Feature – Relations – Morphed By Many – Retrieve', () => {
  it('can resolve morphed by many relation', async () => {
    class Post extends Model {
      static entity = 'posts'

      static fields () {
        return {
          id: this.attr(null)
        }
      }
    }

    class Video extends Model {
      static entity = 'videos'

      static fields () {
        return {
          id: this.attr(null)
        }
      }
    }

    class Tag extends Model {
      static entity = 'tags'

      static fields () {
        return {
          id: this.attr(null),
          name: this.attr(''),
          posts: this.morphedByMany(Post, Taggable, 'tag_id', 'taggable_id', 'taggable_type'),
          videos: this.morphedByMany(Video, Taggable, 'tag_id', 'taggable_id', 'taggable_type')
        }
      }
    }

    class Taggable extends Model {
      static entity = 'taggables'

      static fields () {
        return {
          id: this.attr(null),
          tag_id: this.attr(null),
          taggable_id: this.attr(null),
          taggable_type: this.attr(null)
        }
      }
    }

    const store = createStore([{ model: Post }, { model: Video }, { model: Tag }, { model: Taggable }])

    await Post.create({
      data: [{ id: 1 }, { id: 5 }]
    })

    await Video.create({
      data: [{ id: 3 }, { id: 4 }, { id: 5 }]
    })

    await Tag.create({
      data: { id: 1, name: 'news' }
    })

    await Taggable.create({
      data: [
        { id: 1, tag_id: 1, taggable_id: 1, taggable_type: 'posts' },
        { id: 2, tag_id: 2, taggable_id: 3, taggable_type: 'videos' },
        { id: 3, tag_id: 1, taggable_id: 5, taggable_type: 'posts' },
        { id: 4, tag_id: 1, taggable_id: 4, taggable_type: 'videos' }
      ]
    })

    const tag = Tag.query().with('posts').with('videos').find(1)

    expect(tag.posts.length).toBe(2)
    expect(tag.videos.length).toBe(1)
  })

  it('can resolve morphed by many relation with custom primary key', async () => {
    class Post extends Model {
      static entity = 'posts'

      static primaryKey = 'post_id'

      static fields () {
        return {
          post_id: this.attr(null)
        }
      }
    }

    class Video extends Model {
      static entity = 'videos'

      static fields () {
        return {
          id: this.attr(null)
        }
      }
    }

    class Tag extends Model {
      static entity = 'tags'

      static primaryKey = 'tag_id'

      static fields () {
        return {
          tag_id: this.attr(null),
          name: this.attr(''),
          posts: this.morphedByMany(Post, Taggable, 'tag_id', 'taggable_id', 'taggable_type'),
          videos: this.morphedByMany(Video, Taggable, 'tag_id', 'taggable_id', 'taggable_type')
        }
      }
    }

    class Taggable extends Model {
      static entity = 'taggables'

      static fields () {
        return {
          id: this.attr(null),
          tag_id: this.attr(null),
          taggable_id: this.attr(null),
          taggable_type: this.attr(null)
        }
      }
    }

    const store = createStore([{ model: Post }, { model: Video }, { model: Tag }, { model: Taggable }])

    await Post.create({
      data: [{ post_id: 1 }, { post_id: 5 }]
    })

    await Video.create({
      data: [{ id: 3 }, { id: 4 }, { id: 5 }]
    })

    await Tag.create({
      data: { tag_id: 1, name: 'news' }
    })

    await Taggable.create({
      data: [
        { id: 1, tag_id: 1, taggable_id: 1, taggable_type: 'posts' },
        { id: 2, tag_id: 2, taggable_id: 3, taggable_type: 'videos' },
        { id: 3, tag_id: 1, taggable_id: 5, taggable_type: 'posts' },
        { id: 4, tag_id: 1, taggable_id: 4, taggable_type: 'videos' }
      ]
    })

    const tag = Tag.query().with('posts').with('videos').find(1)

    expect(tag.posts.length).toBe(2)
    expect(tag.videos.length).toBe(1)
  })

  it('can resolve morphed by many relation with custom local and related key', async () => {
    class Post extends Model {
      static entity = 'posts'

      static fields () {
        return {
          id: this.attr(null),
          post_id: this.attr(null)
        }
      }
    }

    class Video extends Model {
      static entity = 'videos'

      static fields () {
        return {
          id: this.attr(null)
        }
      }
    }

    class Tag extends Model {
      static entity = 'tags'

      static fields () {
        return {
          id: this.attr(null),
          tag_id: this.attr(null),
          name: this.attr(''),
          posts: this.morphedByMany(Post, Taggable, 'tag_id', 'taggable_id', 'taggable_type', 'tag_id', 'post_id'),
          videos: this.morphedByMany(Video, Taggable, 'tag_id', 'taggable_id', 'taggable_type', 'tag_id')
        }
      }
    }

    class Taggable extends Model {
      static entity = 'taggables'

      static fields () {
        return {
          id: this.attr(null),
          tag_id: this.attr(null),
          taggable_id: this.attr(null),
          taggable_type: this.attr(null)
        }
      }
    }

    const store = createStore([{ model: Post }, { model: Video }, { model: Tag }, { model: Taggable }])

    await Post.create({
      data: [
        { id: 1, post_id: 100 },
        { id: 5, post_id: 105 }
      ]
    })

    await Video.create({
      data: [{ id: 3 }, { id: 4 }, { id: 5 }]
    })

    await Tag.create({
      data: { id: 1, tag_id: 200, name: 'news' }
    })

    await Taggable.create({
      data: [
        { id: 1, tag_id: 200, taggable_id: 100, taggable_type: 'posts' },
        { id: 2, tag_id: 2, taggable_id: 3, taggable_type: 'videos' },
        { id: 3, tag_id: 200, taggable_id: 105, taggable_type: 'posts' },
        { id: 4, tag_id: 200, taggable_id: 4, taggable_type: 'videos' }
      ]
    })

    const tag = Tag.query().with('posts').with('videos').find(1)

    expect(tag.posts.length).toBe(2)
    expect(tag.videos.length).toBe(1)
  })
})
