# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150608150235) do

  create_table "categories", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "categories_places", id: false, force: true do |t|
    t.integer "category_id"
    t.integer "place_id"
  end

  create_table "places", force: true do |t|
    t.text     "name"
    t.text     "address"
    t.text     "district"
    t.decimal  "lat"
    t.decimal  "lng"
    t.integer  "category_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "verified",            default: false
    t.string   "access"
    t.integer  "schedule_day_start"
    t.integer  "schedule_day_end"
    t.time     "schedule_hour_start"
    t.time     "schedule_hour_end"
    t.integer  "contact_phone"
    t.string   "country"
  end

  create_table "users", force: true do |t|
    t.text     "name"
    t.text     "email"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "admin",      default: false
    t.string   "token"
  end

end
